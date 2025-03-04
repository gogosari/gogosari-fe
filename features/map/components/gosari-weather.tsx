'use client'

import Image from 'next/image'

import WeatherIcon from '@/public/images/weather.png'

import { useWeather } from '../../weather/hooks/use-weather'

export default function GosariWeather() {
  const { data: weatherData } = useWeather()

  return (
    <div className="flex h-9 items-center justify-center gap-1 rounded-2xl bg-black/70">
      <Image src={WeatherIcon} alt="조금 흐림" width={24} height={24} />
      <div className="text-sm font-semibold text-white">
        오늘은 고사리 캐기 좋은 날! &nbsp;
        <span className="text-[#02FFC8]">현재 온도 {weatherData?.main.temp || '-'}°</span>
      </div>
    </div>
  )
}
