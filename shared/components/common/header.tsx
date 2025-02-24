import { PropsWithChildren } from 'react'

import NotificationIcon from '@/public/svgs/notification.svg'
import SearchIcon from '@/public/svgs/search.svg'
import { cn } from '@/shared/lib/utils'

import BackButton from './back-button'

interface Props extends PropsWithChildren {
  hasBackButton?: boolean
}

export default function Header({ hasBackButton = false, children }: Props) {
  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-50 flex h-14 w-full max-w-screen-sm items-center overflow-x-hidden border-b border-gray-200 bg-white px-[22.5px] py-2 sm:w-[390px]',
          hasBackButton ? 'justify-between' : 'justify-end',
        )}
      >
        <h1 className="absolute top-1/2 left-1/2 -translate-1/2 font-bold">{children}</h1>
        {hasBackButton && <BackButton />}
        <div className="flex gap-2">
          <button className="flex items-center justify-center">
            <SearchIcon />
          </button>
          <button className="flex items-center justify-center">
            <NotificationIcon />
          </button>
        </div>
      </header>
      <div className="h-[76px] w-full"></div>
    </>
  )
}
