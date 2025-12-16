export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['@/assets/styles/main.css'],

	ui: {
		colorMode: false,
	},

	eslint: {
		config: {
			standalone: false,
		},
	},

	modules: ['@nuxt/ui', '@nuxt/eslint'],
})
