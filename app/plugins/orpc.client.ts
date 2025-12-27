import type { RouterContract } from '#shared/orpc/contracts'
import type { ContractRouterClient } from '@orpc/contract'
import { defineNuxtPlugin } from '#app'
import { createORPCClient, onError } from '@orpc/client'
import { RPCLink } from '@orpc/client/fetch'
import { createORPCVueColadaUtils } from '@orpc/vue-colada'

export default defineNuxtPlugin(() => {
	const rpcLink = new RPCLink({
		url: `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/rpc`,
		fetch(url, options) {
			return fetch(url, {
				...options,
				credentials: 'include',
			})
		},
		clientInterceptors: [
			onError(error => console.error(error)),
		],
	})

	const client: ContractRouterClient<RouterContract> = createORPCClient(rpcLink)
	const orpcUtils = createORPCVueColadaUtils(client)

	return {
		provide: {
			orpc: orpcUtils,
		},
	}
})
