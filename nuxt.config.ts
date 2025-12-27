export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	css: ['@/assets/styles/main.css'],

	modules: [
		'@nuxt/ui',
		'@nuxt/eslint',
		'@pinia/nuxt',
		'@pinia/colada-nuxt',
		'@nuxtjs/i18n',
	],

	i18n: {
		defaultLocale: 'pt-br',
		locales: [
			{ code: 'pt-br', name: 'Português (Brasil)', file: 'pt-br.json' },
		],
	},

	runtimeConfig: {
		database: {
			url: '',
		},
	},

	eslint: {
		config: {
			standalone: false,
		},
	},
})
