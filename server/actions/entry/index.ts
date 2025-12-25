import type { Entry, EntryWithId } from '#shared/schemas/entry'
import type { AsyncAction } from 'resultfier/action'
import { entryWithIdSchema } from '#shared/schemas/entry'
import { eq } from 'drizzle-orm'
import { ok, toAsyncResult } from 'resultfier'

export interface EntryActions {
	list: AsyncAction<EntryWithId[], unknown>
	findById: AsyncAction<EntryWithId | null, unknown, { id: EntryWithId['id'] }>
	findByDate: AsyncAction<EntryWithId | null, unknown, { date: EntryWithId['date'] }>
	create: AsyncAction<EntryWithId, unknown, Entry>
	delete: AsyncAction<void, unknown, { id: EntryWithId['id'] }>
}

export const entryActions: EntryActions = {
	async list() {
		const { db } = useDb()
		const entries = await db.query.entry.findMany()

		const result = await toAsyncResult(() => entryWithIdSchema.array().parse(entries))

		return result
	},

	async findById({ id }) {
		const { db, schema } = useDb()

		const entry = await db.query.entry.findFirst({
			where: eq(schema.entry.id, id),
		})

		const result = await toAsyncResult(() => entryWithIdSchema.parse(entry))

		return result
	},

	async findByDate({ date }) {
		const { db, schema } = useDb()

		const entry = await db.query.entry.findFirst({
			where: eq(schema.entry.date, date),
		})

		const result = await toAsyncResult(() => entryWithIdSchema.parse(entry))

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

		const result = await toAsyncResult(() => entryWithIdSchema.parse(entry[0]))

		return result
	},
}
