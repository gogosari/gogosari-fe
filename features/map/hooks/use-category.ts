'use client'

import { useQuery } from '@tanstack/react-query'

import { getCategory } from '../api/get-category'

export interface CategoryModel {
  id: number
  name: string
  code: string
}

export function useCategory() {
  return useQuery<CategoryModel[]>({
    queryKey: ['category'],
    queryFn: () => getCategory(),
  })
}
