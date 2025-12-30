import type { Mood } from '../../shared/schemas/entry/mood'
import * as d from 'drizzle-orm/pg-core'

export const entry = d.pgTable('entry', {
	id: d.integer('id').generatedAlwaysAsIdentity().primaryKey(),
	date: d.date('date').notNull(),
	mood: d.text('mood').$type<Mood>().notNull(),
}, table => [
	d.uniqueIndex('date_unique_idx').on(table.date),
])
