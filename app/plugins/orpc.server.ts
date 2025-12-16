import { router } from '@@/server/orpc/routes'
import { createRouterClient } from '@orpc/server'
import { createORPCVueColadaUtils } from '@orpc/vue-colada'

export default defineNuxtPlugin(() => {
	const event = useRequestEvent()

	const client = createRouterClient(router, {
		context: {
			headers: event?.headers,
		},
	})
	const orpcUtils = createORPCVueColadaUtils(client)

	return {
		provide: {
			orpc: orpcUtils,
		},
	}
})
