import z from 'zod'

export const moodSchema = z.enum(['veryBad', 'bad', 'neutral', 'good', 'great'])

export type Mood = z.infer<typeof moodSchema>
