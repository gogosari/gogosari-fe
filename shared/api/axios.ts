import axios, { CreateAxiosDefaults } from 'axios'
import { env } from 'next-runtime-env'

import { errorInterceptor } from './interceptors'

const API_BASE_URL = env('NEXT_PUBLIC_API_URL') || 'http://localhost:8080'
const API_PREFIX = '/api/v1'

const baseURL = API_BASE_URL.endsWith(API_PREFIX) ? API_BASE_URL : `${API_BASE_URL}${API_PREFIX}`

const axiosConfig: CreateAxiosDefaults = {
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const axiosInstance = axios.create(axiosConfig)
export const authAxiosInstance = axios.create({ ...axiosConfig, withCredentials: true })

axiosInstance.interceptors.response.use(null, errorInterceptor)
authAxiosInstance.interceptors.response.use(null, errorInterceptor)
