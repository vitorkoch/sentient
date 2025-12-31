import z from 'zod'
import { moodSchema } from './mood'

export const entrySchema = z.object({
	id: z.uuidv7(),
	mood: moodSchema,
	date: z.iso.date(),
})

export type Entry = z.infer<typeof entrySchema>
