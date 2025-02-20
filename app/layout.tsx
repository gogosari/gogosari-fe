import './globals.css'

import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'

import QueryProvider from '@/shared/query/provider'

import TabBar from '../shared/components/common/tab-bar'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="bg-gray-100 font-sans">
        <QueryProvider>
          <div className="bg-background relative mx-auto h-dvh w-full max-w-screen-sm antialiased sm:w-[390px]">
            {children}
            <TabBar />
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
