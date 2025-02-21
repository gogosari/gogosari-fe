import './animation.css'
import './globals.css'

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

export const metadata = {
  title: '고고사리',
  description: '우리 다 같이 캐러갈깡?',
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
