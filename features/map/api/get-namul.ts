import { axiosInstance } from '@/shared/api/axios'

type Namul = {
  addr: string
  longitude: number
  latitude: number
  category: {
    name: string
    code: string
    id: number
  }
}

export async function getNamuls(): Promise<Namul[]> {
  const { data } = await axiosInstance.get(`/namuls/?skip=0&limit=100`)
  return data
}

export async function getNamulById(namulId: number) {
  const { data } = await axiosInstance.get(`/namuls/${namulId}`)
  return data
}
