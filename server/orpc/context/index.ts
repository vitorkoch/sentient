import { routerContract } from '#shared/orpc/contracts'
import { implement } from '@orpc/server'

const os = implement(routerContract)

export const o = os.$context()
