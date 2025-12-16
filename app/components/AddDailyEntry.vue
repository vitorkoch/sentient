<script setup lang="ts">
import type { Entry } from '#shared/schemas/entry'

const todayEntry = reactive<Partial<Entry>>({
	mood: undefined,
	date: new Date(),
})

function entryMoodMatch(mood: Entry['mood']) {
	return todayEntry.mood === mood
}

const toast = useToast()

async function handleConfirm() {
	return await Promise.try(() => {
		toast.add({ title: 'Entrada salva', description: `Humor: ${todayEntry.mood}`, color: 'info' })
	})
}
</script>

<template>
	<UCard class="w-150 max-w-full m-auto">
		<template #header>
			<div class="text-center text-lg flex flex-col">
				Como você se sente hoje?
				<div class="text-dimmed">
					<NuxtTime :datetime="todayEntry.date!" />
				</div>
			</div>
		</template>

		<div class="grid grid-cols-5 place-items-center my-10 gap-2">
			<div class="size-full rounded-lg ring text-error flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('terrible') ? 'bg-error/10 ring-error/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'terrible'">
				<UIcon name="solar:confounded-square-bold-duotone" class="size-full" />
				<div>Péssimo</div>
			</div>
			<div class="size-full rounded-lg ring text-warning flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('sad') ? 'bg-warning/10 ring-warning/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'sad'">
				<UIcon name="solar:sad-square-bold-duotone" class="size-full" />
				<div>Mal</div>
			</div>
			<div class="size-full rounded-lg ring text-default flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('ok') ? 'bg-black/10 ring-black/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'ok'">
				<UIcon name="solar:expressionless-square-bold-duotone" class="size-full" />
				<div>Ok</div>
			</div>
			<div class="size-full rounded-lg ring text-info flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('happy') ? 'bg-info/10 ring-info/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'happy'">
				<UIcon name="solar:smile-square-bold-duotone" class="size-full" />
				<div>Bom</div>
			</div>
			<div class="size-full rounded-lg ring text-success flex flex-col items-center justify-center gap-1 aspect-square transition-all duration-300 p-1" :class="[entryMoodMatch('awesome') ? 'bg-success/10 ring-success/20' : 'bg-transparent ring-transparent']" @click="todayEntry.mood = 'awesome'">
				<UIcon name="solar:emoji-funny-square-bold-duotone" class="size-full" />
				<div>Ótimo</div>
			</div>
		</div>

		<template #footer>
			<div class="flex flex-row gap-5 items-center justify-center">
				<UButton label="Cancelar" variant="soft" color="neutral" size="xl" icon="solar:close-circle-linear" @click="todayEntry.mood = undefined" />
				<UButton label="Confirmar" variant="solid" color="primary" size="xl" icon="solar:check-circle-linear" loading-auto @click="handleConfirm" />
			</div>
		</template>
	</UCard>
</template>
