import { dehydrate,FetchQueryOptions, HydrationBoundary } from '@tanstack/react-query'

import { getQueryClientForPrefetch } from './client'

interface QueryHydrateProps {
  query: FetchQueryOptions
  children: React.ReactNode
}

export async function QueryHydrate({ query, children }: QueryHydrateProps) {
  const queryClient = getQueryClientForPrefetch()
  await queryClient.prefetchQuery(query)

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
