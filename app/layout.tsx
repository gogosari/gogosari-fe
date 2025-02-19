import './globals.css'

import localFont from 'next/font/local'

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
      <body className="font-sans">{children}</body>
    </html>
  )
}
