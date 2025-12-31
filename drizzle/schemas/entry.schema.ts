import type { Mood } from '../../shared/schemas/entry/mood'
import * as d from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'

export const entry = d.pgTable('entry', {
	id: d.uuid('id').$default(() => uuidv7()).primaryKey(),
	date: d.date('date').notNull(),
	mood: d.text('mood').$type<Mood>().notNull(),
}, table => [
	d.uniqueIndex('date_unique_idx').on(table.date),
])
