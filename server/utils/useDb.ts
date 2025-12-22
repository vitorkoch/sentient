import * as schema from '@@/drizzle/schemas'
import { drizzle } from 'drizzle-orm/postgres-js'

export function useDb() {
	const { database } = useRuntimeConfig()

	const db = drizzle(database.url, {
		schema,
	})

	return {
		db,
		schema,
	}
}
