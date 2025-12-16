export default defineAppConfig({
	ui: {
		colors: {
			primary: 'slate',
			neutral: 'zinc',
		},

		icons: {
			menu: 'solar:hamburger-menu-bold-duotone',
			close: 'solar:close-circle-bold-duotone',
			dark: 'solar:moon-bold-duotone',
			light: 'solar:sun-bold-duotone',
			system: 'solar:monitor-bold-duotone',
		},

		header: {
			slots: {
				root: 'shadow-sm',
			},
		},

		footer: {
			slots: {
				root: 'shadow-sm',
			},
		},

		card: {
			slots: {
				root: 'shadow',
			},
			defaultVariants: {
				variant: 'subtle',
			},
		},
	},
})
