import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

import { queryConfig } from './config'

let browserQueryClient: QueryClient | undefined = undefined

function makeQueryClient() {
  return new QueryClient(queryConfig)
}

export const getQueryClientForPrefetch = cache(() => new QueryClient(queryConfig))

export function getQueryClientForProvider() {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}
