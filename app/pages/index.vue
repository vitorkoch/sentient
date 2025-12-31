<script setup lang="ts">
import { LazyAddDailyEntryModal } from '#components'
import { getIsoDateString } from '#shared/utils/date'

const overlay = useOverlay()

const addDailyEntryModal = overlay.create(LazyAddDailyEntryModal)

async function openAddDailyEntryModal() {
	addDailyEntryModal.open()
}

const { $orpc } = useNuxtApp()

const { state: todayDateState } = useQuery($orpc.entry.findByDate.queryOptions({
	input: {
		date: getIsoDateString(new Date()),
	},
}))
</script>

<template>
	<UPage>
		<UPageBody>
			<UContainer>
				<template v-if="!todayDateState.data">
					<UEmpty
						title="Adicione sua nota diária"
						icon="tabler:notebook-off"
						:actions="[
							{
								label: 'Registrar nota',
								icon: 'tabler:notebook',
								color: 'primary',
								onClick: openAddDailyEntryModal,
							},
						]"
					/>
				</template>

				<template v-else>
					<EntryCard v-model="todayDateState.data" />
				</template>

				<USeparator class="my-4" />
				<EntryHistory />
			</UContainer>
		</UPageBody>
	</UPage>
</template>
