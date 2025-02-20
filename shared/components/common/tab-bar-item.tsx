'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type TabBarItemProps = PropsWithChildren<{
  label: string
  route: string | null
}>

export default function TabBarItem({ label, route, children }: TabBarItemProps) {
  const pathname = usePathname()

  const menuClass = twMerge(
    'flex w-10 cursor-pointer flex-col items-center gap-1',
    pathname === route ? 'text-primary-normal' : 'text-black',
  )

  if (!route) {
    return (
      <div className={menuClass}>
        {children}
        {label && <span className="text-caption font-normal">{label}</span>}
      </div>
    )
  }

  return (
    <Link className={menuClass} href={route}>
      {children}
      {label && <span className="text-caption font-normal">{label}</span>}
    </Link>
  )
}
