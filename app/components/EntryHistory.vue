<script lang="ts" setup>
const { $orpc } = useNuxtApp()
const { moodIcons } = useAppConfig()

const { state } = useQuery($orpc.entry.list.queryOptions())
</script>

<template>
	<div>
		<template v-if="state.status === 'pending'">
			<div>Loading...</div>
		</template>
		<template v-else-if="state.status === 'error'">
			<div>Error: {{ state.error.message }}</div>
		</template>
		<template v-else-if="state.data.length === 0">
			<UEmpty title="Nenhuma nota diária encontrada" />
		</template>
		<template v-else>
			<UPageGrid>
				<UPageCard v-for="entry in state.data" :key="entry.id" variant="subtle" :title="entry.date" :description="entry.mood" :icon="moodIcons[entry.mood]" />
			</UPageGrid>
		</template>
	</div>
</template>
