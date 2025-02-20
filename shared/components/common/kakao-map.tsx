import Script from 'next/script'
import { env } from 'next-runtime-env'
import { Map, MapProps } from 'react-kakao-maps-sdk'
import { twMerge } from 'tailwind-merge'

const apiKey = env('NEXT_PUBLIC_KAKAO_KEY')
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`

type KakaoMapProps = {} & MapProps

export default function KakaoMap({ className: classNameProp, ...rest }: KakaoMapProps) {
  const className = twMerge('h-full w-full', classNameProp)

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map className={className} {...rest} />
    </>
  )
}
