'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type TabBarItemProps = PropsWithChildren<{
  label: string
  route: string
}>

export default function TabBarItem({ label, route, children }: TabBarItemProps) {
  const pathname = usePathname()

  /** @TODO 메인 컬러 정의 필요 */
  const menuClass = twMerge(
    'flex w-10 cursor-pointer flex-col items-center gap-1',
    pathname === route ? 'text-[#00D492]' : 'text-black',
  )

  return (
    <Link className={menuClass} href={route}>
      {children}
      <span className="text-caption font-normal">{label}</span>
    </Link>
  )
}
