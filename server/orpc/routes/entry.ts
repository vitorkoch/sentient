import { o } from '../context'

export const entryRouter = {
	list: o.entry.list.handler(async () => {
		return [{ id: '019b2d45-a904-7376-b8bb-ff796994329e', mood: 'happy', date: new Date() }]
	}),
	create: o.entry.create.handler(async () => {
		return { id: '019b2d45-a904-7376-b8bb-ff796994329e', mood: 'happy', date: new Date() }
	}),
	find: o.entry.find.handler(async ({ input }) => {
		return { id: input.id, mood: 'happy', date: new Date() }
	}),
	delete: o.entry.delete.handler(async () => {
		return undefined
	}),
}
