<script lang="ts" setup>
import { getDateByIsoDateString } from '#shared/utils/date'

const { $orpc } = useNuxtApp()

const { state: entriesState } = useQuery($orpc.entry.list.queryOptions())
</script>

<template>
	<div>
		<template v-if="entriesState.status === 'pending'">
			<div>Loading...</div>
		</template>

		<template v-else-if="entriesState.status === 'error'">
			<div>Error: {{ entriesState.error.message }}</div>
		</template>

		<template v-else-if="entriesState.data.length === 0">
			<UEmpty title="Nenhuma nota diária encontrada" icon="tabler:notebook-off" />
		</template>

		<template v-else>
			<UPageGrid>
				<UPageCard v-for="entry in entriesState.data" :key="entry.id" :title="getDateByIsoDateString(entry.date).toLocaleDateString()" :description="$t(`mood.${entry.mood}`)" :icon="entry.mood" />
			</UPageGrid>
		</template>
	</div>
</template>
