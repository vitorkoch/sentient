import type { Entry } from '#shared/schemas/entry'
import type { AsyncAction } from 'resultfier/action'
import { entrySchema } from '#shared/schemas/entry'
import { useDb } from '@@/server/utils/useDb'
import { eq } from 'drizzle-orm'
import { ok, toAsyncResult } from 'resultfier'

export interface EntryActions {
	list: AsyncAction<Entry[], unknown>
	findById: AsyncAction<Entry | null, unknown, { id: Entry['id'] }>
	findByDate: AsyncAction<Entry | null, unknown, { date: Entry['date'] }>
	create: AsyncAction<Entry, unknown, Omit<Entry, 'id'>>
	delete: AsyncAction<void, unknown, { id: Entry['id'] }>
}

export const entryActions: EntryActions = {
	async list() {
		const { db } = useDb()
		const entries = await db.query.entry.findMany({
			orderBy: (entry, { desc }) => [desc(entry.date)],
		})

		const result = await toAsyncResult(() => entrySchema.array().parse(entries))

		return result
	},

	async findById({ id }) {
		const { db, schema } = useDb()

		const entry = await db.query.entry.findFirst({
			where: eq(schema.entry.id, id),
		})

		if (!entry) {
			return ok(null)
		}

		const result = await toAsyncResult(() => entrySchema.parse(entry))

		return result
	},

	async findByDate({ date }) {
		const { db, schema } = useDb()

		const entry = await db.query.entry.findFirst({
			where: eq(schema.entry.date, date),
		})

		if (!entry) {
			return ok(null)
		}

		const result = await toAsyncResult(() => entrySchema.parse(entry))

		return result
	},

	async delete({ id }) {
		const { db, schema } = useDb()

		await db.delete(schema.entry).where(eq(schema.entry.id, id))

		return ok(undefined)
	},

	async create({ date, mood }) {
		const { db, schema } = useDb()

		const entry = await db.insert(schema.entry).values({
			date,
			mood,
		}).returning()

		const result = await toAsyncResult(() => entrySchema.parse(entry[0]))

		return result
	},
}
