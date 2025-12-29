import type { Mood } from '~~/shared/schemas/entry/mood'

const moodIcons: Record<Mood, string> = {
	veryBad: 'solar:confounded-circle-bold-duotone',
	bad: 'solar:sad-circle-bold-duotone',
	neutral: 'solar:expressionless-circle-bold-duotone',
	good: 'solar:smile-circle-bold-duotone',
	great: 'solar:emoji-funny-circle-bold-duotone',
}

const moodColors: Record<Mood, string> = {
	veryBad: 'error',
	bad: 'warning',
	neutral: 'default',
	good: 'info',
	great: 'success',
}

export default defineAppConfig({
	moodIcons,
	moodColors,

	icon: {
		aliases: moodIcons,
	},

	ui: {
		colors: {
			neutral: 'slate',
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

		pageCard: {
			slots: {
				root: 'shadow',
			},
			defaultVariants: {
				variant: 'subtle',
			},
		},

		empty: {
			slots: {
				root: 'shadow',
			},
			defaultVariants: {
				variant: 'subtle',
			},
		},

		button: {
			slots: {
				base: 'shadow ring ring-default',
			},
			defaultVariants: {
				variant: 'subtle',
				color: 'neutral',
				size: 'lg',
			},
		},

		badge: {
			slots: {
				base: 'shadow',
			},
			defaultVariants: {
				variant: 'subtle',
			},
		},

		selectMenu: {
			slots: {
				base: 'shadow',
			},
			defaultVariants: {
				variant: 'subtle',
			},
		},

		icons: {
			arrowDown: 'tabler:arrow-down',
			arrowLeft: 'tabler:arrow-left',
			arrowRight: 'tabler:arrow-right',
			arrowUp: 'tabler:arrow-up',
			caution: 'tabler:alert-square-rounded',
			check: 'tabler:check',
			chevronDoubleLeft: 'tabler:chevrons-left',
			chevronDoubleRight: 'tabler:chevrons-right',
			chevronDown: 'tabler:chevron-down',
			chevronLeft: 'tabler:chevron-left',
			chevronRight: 'tabler:chevron-right',
			chevronUp: 'tabler:chevron-up',
			close: 'tabler:x',
			copy: 'tabler:copy',
			copyCheck: 'tabler:copy-check',
			dark: 'tabler:moon',
			drag: 'tabler:grip-vertical',
			ellipsis: 'tabler:dots',
			error: 'tabler:square-rounded-x',
			external: 'tabler:external-link',
			eye: 'tabler:eye',
			eyeOff: 'tabler:eye-off',
			file: 'tabler:file',
			folder: 'tabler:folder',
			folderOpen: 'tabler:folder-open',
			hash: 'tabler:hash',
			info: 'tabler:info-square-rounded',
			light: 'tabler:sun',
			loading: 'tabler:loader-2',
			menu: 'tabler:menu',
			minus: 'tabler:minus',
			panelClose: 'tabler:layout-sidebar-left-collapse',
			panelOpen: 'tabler:layout-sidebar-left-expand',
			plus: 'tabler:plus',
			reload: 'tabler:reload',
			search: 'tabler:search',
			stop: 'tabler:player-stop',
			success: 'tabler:square-rounded-check',
			system: 'tabler:device-desktop',
			tip: 'tabler:bulb',
			upload: 'tabler:upload',
			warning: 'tabler:alert-triangle',
		},
	},
})
