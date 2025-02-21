'use client'

import { MapMarker } from 'react-kakao-maps-sdk'

import KakaoMap from '@/shared/components/common/kakao-map'

import { useNamuls } from '../hooks/use-namuls'

export default function LocationMap() {
  const { data: namulsData } = useNamuls()

  return (
    <div className="h-full w-full">
      <KakaoMap center={{ lat: 33.4506, lng: 126.57 }}>
        {namulsData?.map((namul, index) => (
          <MapMarker
            key={index}
            position={{ lat: namul.latitude, lng: namul.longitude }}
            image={{ src: '/images/marker.png', size: { width: 58, height: 69 } }}
            title={namul.addr}
          />
        ))}
      </KakaoMap>
    </div>
  )
}
