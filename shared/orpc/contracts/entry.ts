import { entryWithIdSchema } from '#shared/schemas/entry'
import { oc } from '@orpc/contract'

export const entryContract = {
	list: oc.output(entryWithIdSchema.array()),

	findById: oc.input(entryWithIdSchema.pick({ id: true }))
		.output(entryWithIdSchema.nullable()),

	findByDate: oc.input(entryWithIdSchema.pick({ date: true }))
		.output(entryWithIdSchema.nullable()),

	create: oc.input(entryWithIdSchema.omit({ id: true })).output(entryWithIdSchema),

	delete: oc.input(entryWithIdSchema.pick({ id: true })),
}
