import axios from 'axios'
import { env } from 'next-runtime-env'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
const appid = env('NEXT_PUBLIC_OPENWEATHER_API_KEY')

export async function getWeather() {
  if (!appid) {
    throw new Error('API 키가 누락되었습니다.')
  }

  const { data } = await axios.get(BASE_URL, {
    params: {
      q: 'Jeju',
      lang: 'kr',
      units: 'metric',
      appid,
    },
  })

  return data
}
