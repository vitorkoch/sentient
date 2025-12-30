<script setup lang="ts">
import type { Entry } from '#shared/schemas/entry'
import { entrySchema } from '#shared/schemas/entry'
import { formatISO } from 'date-fns'
import { toAsyncResult } from 'resultfier'

const emit = defineEmits(['update:open'])

const toast = useToast()
const { $orpc } = useNuxtApp()
const queryCache = useQueryCache()
const { moodIcons, ui } = useAppConfig()

const { mutateAsync: createEntry } = useMutation($orpc.entry.create.mutationOptions({
	async onSettled() {
		await queryCache.invalidateQueries({
			key: $orpc.entry.key(),
		})
	},
}))

const todayEntry = reactive<Partial<Entry>>({
	mood: undefined,
	date: formatISO(new Date(), {
		representation: 'date',
	}),
})

function entryMoodMatch(mood: Entry['mood']) {
	return todayEntry.mood === mood
}

async function handleConfirm() {
	const result = await toAsyncResult(() => entrySchema.omit({ id: true }).parse(todayEntry))

	if (result.isErr) {
		toast.add({ title: 'Erro ao salvar nota diária', color: 'error' })
		return
	}

	const { date, mood } = result.value

	await createEntry({
		date,
		mood,
	})

	emit('update:open', false)

	toast.add({ title: 'Nota diária salva com sucesso', color: 'success' })
}
</script>

<template>
	<UModal>
		<template #content>
			<UCard class="w-150 max-w-full m-auto p-2">
				<template #header>
					<div class="text-center text-lg flex flex-col">
						Como você se sente hoje?
						<div class="text-dimmed">
							<NuxtTime :datetime="todayEntry.date!" />
						</div>
					</div>
				</template>

				<div class="grid grid-cols-5 place-items-center my-10 gap-2">
					<div class="size-full rounded-lg ring text-error flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('veryBad') ? 'bg-error/10 ring-error/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'veryBad'">
						<UIcon :name="moodIcons.veryBad" class="size-full" />
						<div>{{ $t('mood.veryBad') }}</div>
					</div>
					<div class="size-full rounded-lg ring text-warning flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('bad') ? 'bg-warning/10 ring-warning/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'bad'">
						<UIcon :name="moodIcons.bad" class="size-full" />
						<div>{{ $t('mood.bad') }}</div>
					</div>
					<div class="size-full rounded-lg ring text-default flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('neutral') ? 'bg-black/10 ring-black/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'neutral'">
						<UIcon :name="moodIcons.neutral" class="size-full" />
						<div>{{ $t('mood.neutral') }}</div>
					</div>
					<div class="size-full rounded-lg ring text-info flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('good') ? 'bg-info/10 ring-info/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'good'">
						<UIcon :name="moodIcons.good" class="size-full" />
						<div>{{ $t('mood.good') }}</div>
					</div>
					<div class="size-full rounded-lg ring text-success flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('great') ? 'bg-success/10 ring-success/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'great'">
						<UIcon :name="moodIcons.great" class="size-full" />
						<div>{{ $t('mood.great') }}</div>
					</div>
				</div>

				<template #footer>
					<div class="flex flex-row gap-5 items-center justify-center">
						<UButton label="Cancelar" color="neutral" :icon="ui.icons.close" @click="$emit('update:open', false)" />
						<UButton label="Confirmar" variant="solid" color="primary" :icon="ui.icons.check" loading-auto @click="handleConfirm" />
					</div>
				</template>
			</UCard>
		</template>
	</UModal>
</template>
