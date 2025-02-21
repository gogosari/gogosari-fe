import './animation.css'
import './globals.css'

import { Metadata } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { env, PublicEnvScript } from 'next-runtime-env'
import { PropsWithChildren } from 'react'

import { Toaster } from '@/shared/components/ui/sonner'
import QueryProvider from '@/shared/query/provider'

const apiKey = env('NEXT_PUBLIC_KAKAO_KEY')
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: '고고사리',
  description:
    '실시간 지도 기반으로 최적의 고사리 채집 스팟을 제공하여, 누구나 쉽게 고사리 채집을 즐길 수 있도록 도와주는 서비스입니다.',
  openGraph: {
    title: '고고사리',
    description:
      '실시간 지도 기반으로 최적의 고사리 채집 스팟을 제공하여, 누구나 쉽게 고사리 채집을 즐길 수 있도록 도와주는 서비스입니다.',
    images: [
      {
        url: '/images/main-thumbnail.png',
        width: 856,
        height: 481,
        alt: '메인 썸네일 이미지',
      },
    ],
    type: 'website',
    siteName: '고고사리',
  },
  twitter: {
    card: 'summary_large_image',
    title: '고고사리',
    description:
      '실시간 지도 기반으로 최적의 고사리 채집 스팟을 제공하여, 누구나 쉽게 고사리 채집을 즐길 수 있도록 도와주는 서비스입니다.',
    images: ['/images/main-thumbnail.png'],
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <head>
        <PublicEnvScript />
      </head>
      <body className="bg-gray-100 font-sans antialiased">
        <QueryProvider>
          <div className="bg-background relative mx-auto h-dvh w-full max-w-screen-sm overflow-x-hidden antialiased sm:w-[390px]">
            {children}
          </div>
          <Toaster />
        </QueryProvider>
        <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      </body>
    </html>
  )
}
