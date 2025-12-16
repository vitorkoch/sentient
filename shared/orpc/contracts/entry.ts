import { entryWithIdSchema } from '#shared/schemas/entry'
import { oc } from '@orpc/contract'

export const entryContract = {
	list: oc.output(entryWithIdSchema.array()),

	find: oc.input(entryWithIdSchema.pick({ id: true }))
		.output(entryWithIdSchema),

	create: oc.input(entryWithIdSchema.omit({ id: true })).output(entryWithIdSchema),

	delete: oc.input(entryWithIdSchema.pick({ id: true })),
}
