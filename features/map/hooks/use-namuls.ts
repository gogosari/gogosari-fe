import { useQuery } from '@tanstack/react-query'

import { getNamulById, getNamuls } from '../api/get-namul'

export function useNamuls() {
  return useQuery({
    queryKey: ['namuls'],
    queryFn: () => getNamuls(),
  })
}

export function useNamul(namulId: number) {
  return useQuery({
    queryKey: ['namul', namulId],
    queryFn: () => getNamulById(namulId),
    enabled: !!namulId,
  })
}
