import { entryActions } from '~~/server/actions/entry'
import { o } from '../context'

export const entryRouter = {
	list: o.entry.list.handler(async () => {
		const result = await entryActions.list()

		if (result.isErr) {
			throw result.error
		}

		return result.value
	}),

	create: o.entry.create.handler(async ({ input }) => {
		const result = await entryActions.create(input)

		if (result.isErr) {
			throw result.error
		}

		return result.value
	}),

	findById: o.entry.findById.handler(async ({ input }) => {
		const result = await entryActions.findById({ id: input.id })

		if (result.isErr) {
			throw result.error
		}

		return result.value
	}),

	findByDate: o.entry.findByDate.handler(async ({ input }) => {
		const result = await entryActions.findByDate({ date: input.date })

		if (result.isErr) {
			throw result.error
		}

		return result.value
	}),

	delete: o.entry.delete.handler(async ({ input }) => {
		const result = await entryActions.delete({ id: input.id })

		if (result.isErr) {
			throw result.error
		}

		return result.value
	}),
}
