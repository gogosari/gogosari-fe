'use client'

import { useEffect, useState } from 'react'
import { Map, MapProps } from 'react-kakao-maps-sdk'
import { twMerge } from 'tailwind-merge'

type KakaoMapProps = {
  center?: { lat: number; lng: number } | { x: number; y: number }
} & Omit<MapProps, 'center'>

export default function KakaoMap({
  className: classNameProp,
  children,
  center,
  ...rest
}: KakaoMapProps) {
  const className = twMerge('h-full w-full', classNameProp)

  /** 기본 값: 제주 */
  const [location, setLocation] = useState({ lat: 33.4996, lng: 126.5312 })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setLocation({ lat: latitude, lng: longitude })
      })
    } else {
      console.warn('Geolocation을 지원하지 않는 브라우저입니다.')
    }
  }, [])

  if (!location) {
    return null
  }

  return (
    <Map
      className={className}
      center={{ lat: location.lat, lng: location.lng, ...center }}
      level={3}
      {...rest}
    >
      {children}
    </Map>
  )
}
