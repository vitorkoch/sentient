import type { InferContractRouterOutputs } from '@orpc/contract'
import { oc } from '@orpc/contract'
import z from 'zod'
import { entryContract as entry } from './entry'

export const routerContract = {
	entry,

	healthCheck: oc.output(z.object({ status: z.literal(['ok', 'error']) })),
}

export type RouterContract = typeof routerContract
export type ORPCOutputs = InferContractRouterOutputs<RouterContract>
