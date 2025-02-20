import { useQuery } from '@tanstack/react-query'

import { getWeather } from '../apis/get-weather'

export function useWeather() {
  return useQuery({
    queryKey: ['weather', 'jeju'],
    queryFn: getWeather,
    staleTime: 1000 * 60 * 5,
  })
}
