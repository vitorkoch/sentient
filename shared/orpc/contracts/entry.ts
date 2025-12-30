import { entrySchema } from '#shared/schemas/entry'
import { oc } from '@orpc/contract'

export const entryContract = {
	list: oc.output(entrySchema.array()),

	findById: oc.input(entrySchema.pick({ id: true }))
		.output(entrySchema.nullable()),

	findByDate: oc.input(entrySchema.pick({ date: true }))
		.output(entrySchema.nullable()),

	create: oc.input(entrySchema.omit({ id: true })).output(entrySchema),

	delete: oc.input(entrySchema.pick({ id: true })),
}
