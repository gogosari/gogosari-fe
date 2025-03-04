'use client'

import { PropsWithChildren } from 'react'
import { toast } from 'sonner'

import ArrayRightIcon from '@/public/svgs/array-right.svg'
import { TOAST_WAITING } from '@/shared/constants/toast'

type MenuItemProps = PropsWithChildren

export default function MenuItem({ children }: MenuItemProps) {
  const handleMenuClick = () => {
    toast(TOAST_WAITING)
  }

  return (
    <div
      className="flex cursor-pointer justify-between px-4 py-2.5 text-sm font-medium text-gray-700"
      onClick={handleMenuClick}
    >
      {children}
      <ArrayRightIcon className="text-charcoal-500" />
    </div>
  )
}
