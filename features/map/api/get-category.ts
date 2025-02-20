import { axiosInstance } from '@/shared/api/axios'

import { CategoryModel } from '../hooks/use-category'

export const getCategory = async (): Promise<CategoryModel[]> => {
  const response = await axiosInstance.get<CategoryModel[]>('/namuls/category/')
  return response.data
}
