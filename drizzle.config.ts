import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	dialect: 'postgresql',
	schema: './drizzle/schemas/*',
	out: './drizzle/migrations',
	dbCredentials: {
		url: process.env.NUXT_DATABASE_URL ?? '',
	},
})
