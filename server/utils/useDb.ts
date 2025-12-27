import * as schema from '@@/drizzle/schemas'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.NUXT_DATABASE_URL ?? ''

const client = postgres(connectionString)
const db = drizzle(client, { schema })

export function useDb() {
	return {
		db,
		schema,
	}
}
