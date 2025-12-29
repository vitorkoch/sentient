<script lang="ts" setup>
import type { Entry } from '#shared/schemas/entry'

const entry = defineModel<Entry>()
</script>

<template>
	<UPageCard>
		<template #title>
			<div>
				Você registrou seu humor de hoje como:
			</div>
		</template>

		<div class="text-xl flex items-center justify-center flex-col">
			<UIcon :name="entry?.mood" :size="36" />
			{{ $t(`mood.${entry?.mood}`) }}
		</div>
	</UPageCard>
</template>
