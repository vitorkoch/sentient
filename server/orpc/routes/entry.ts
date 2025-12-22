import { entryWithIdSchema } from '#shared/schemas/entry'
import { resultHandlerFromZod } from '@vikoch/resultfier/zod'
import { eq } from 'drizzle-orm'
import { o } from '../context'

export const entryRouter = {
	list: o.entry.list.handler(async () => {
		const { db } = useDb()
		const entries = await db.query.entry.findMany()

		const parser = resultHandlerFromZod(entryWithIdSchema.array())
		const result = parser(entries)

		return result.unwrap()
	}),

	create: o.entry.create.handler(async ({ input }) => {
		const { db, schema } = useDb()

		const entry = await db.insert(schema.entry).values({
			date: input.date,
			mood: input.mood,
		}).returning()

		const parser = resultHandlerFromZod(entryWithIdSchema)
		const result = parser(entry[0])

		return result.unwrap()
	}),

	find: o.entry.find.handler(async ({ input }) => {
		const { db, schema } = useDb()

		const entry = await db.query.entry.findFirst({
			where: eq(schema.entry.id, input.id),
		})
		const parser = resultHandlerFromZod(entryWithIdSchema)
		const result = parser(entry)

		return result.unwrap()
	}),

	delete: o.entry.delete.handler(async ({ input }) => {
		const { db, schema } = useDb()

		await db.delete(schema.entry).where(eq(schema.entry.id, input.id))

		return undefined
	}),
}
