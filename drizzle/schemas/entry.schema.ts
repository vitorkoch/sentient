import type { Mood } from '../../shared/schemas/entry/mood'
import { date, pgTable, text, uniqueIndex, uuid } from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'

export const entry = pgTable('entry', {
	id: uuid('id').primaryKey().$defaultFn(() => uuidv7()),
	date: date('date').notNull(),
	mood: text('mood').$type<Mood>().notNull(),
}, table => [
	uniqueIndex('date_unique_idx').on(table.date),
])
