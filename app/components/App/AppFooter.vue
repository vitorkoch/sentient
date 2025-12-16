<script setup lang="ts">
import type { ORPCOutputs } from '#shared/orpc/contracts'

const { $orpc } = useNuxtApp()

const healthCheckQuery = useQuery($orpc.healthCheck.queryOptions())

function isOk(health: ORPCOutputs['healthCheck']) {
	return health.status === 'ok'
}
</script>

<template>
	<UFooter>
		<template #left>
			<UBadge v-if="!healthCheckQuery.data.value" color="neutral" label="Conectando..." variant="subtle" icon="solar:refresh-bold-duotone" :ui="{ leadingIcon: 'animate-spin' }" />
			<UBadge v-else :color="isOk(healthCheckQuery.data.value!) ? 'success' : 'error'" :label="isOk(healthCheckQuery.data.value!) ? 'OK' : 'ERROR'" variant="subtle" :icon="isOk(healthCheckQuery.data.value!) ? 'solar:link-bold-duotone' : 'solar:link-broken-bold-duotone'" />
		</template>
		<template #default>
			ViKoch © 2025
		</template>
		<template #right>
			<UColorModeSelect />
		</template>
	</UFooter>
</template>
