import z from 'zod'
import { moodSchema } from './mood'

export const entrySchema = z.object({
	mood: moodSchema,
	date: z.date(),
})

export type Entry = z.infer<typeof entrySchema>

export const entryWithIdSchema = entrySchema.extend({
	id: z.uuidv7(),
})

export type EntryWithId = z.infer<typeof entryWithIdSchema>
