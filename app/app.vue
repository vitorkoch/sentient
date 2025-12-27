<script setup lang="ts">
import { pt_br } from '#ui/locale'

const title = 'Sentient'
const description = 'Sentient is a free and open source translation management system.'

useHead({
	htmlAttrs: {
		lang: 'pt-br',
	},
})

useSeoMeta({
	title,
	description,
})
</script>

<template>
	<UApp :locale="pt_br">
		<NuxtRouteAnnouncer />

		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
