import './globals.css'

import localFont from 'next/font/local'

import QueryProvider from '@/shared/query/provider'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans">
        <QueryProvider>
          <div className="relative mx-auto h-dvh w-full max-w-[400px] bg-background px-4 sm:w-[400px]">
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
