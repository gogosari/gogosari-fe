import './globals.css'

import localFont from 'next/font/local'
import { PublicEnvScript } from 'next-runtime-env'
import { PropsWithChildren } from 'react'

import { Toaster } from '@/shared/components/ui/sonner'
import QueryProvider from '@/shared/query/provider'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

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
      </body>
    </html>
  )
}
