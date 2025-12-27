import { o } from '../context'
import { entryRouter as entry } from './entry'

export const router = o.router({
	entry,

	healthCheck: o.healthCheck.handler(() => ({ status: 'ok' })),
})
