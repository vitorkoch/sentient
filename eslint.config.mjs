import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	antfu({
		formatters: true,

		stylistic: { indent: 'tab' },

		rules: {
			'node/prefer-global/process': 'off',
			'antfu/no-top-level-await': 'off',
		},
	}),
)
