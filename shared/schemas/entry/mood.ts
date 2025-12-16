import z from 'zod'

export const moodSchema = z.enum(['terrible', 'sad', 'ok', 'happy', 'awesome'])

export type Mood = z.infer<typeof moodSchema>
