export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['@/assets/styles/main.css'],

	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
		'@pinia/nuxt',
		'@pinia/colada-nuxt',
	],

	eslint: {
		config: {
			standalone: false,
		},
	},
})
