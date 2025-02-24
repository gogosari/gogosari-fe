'use client'

import { motion, useScroll } from 'motion/react'
import { PropsWithChildren, useRef } from 'react'

import { cn } from '@/shared/lib/utils'

import useScrollOverflowMask from '../../hooks/use-scroll-overflow-mask'

interface Props extends PropsWithChildren {
  className?: string
}

export default function ScrollLinked({ className, children }: Props) {
  const container = useRef<HTMLUListElement | null>(null)

  const { scrollXProgress } = useScroll({ container })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <motion.ul
      ref={container}
      className={cn(
        'scrollbar-none m-0 flex h-full list-none gap-2 overflow-x-scroll p-0 [&::-webkit-scrollbar]:hidden',
        className,
      )}
      style={{ maskImage }}
    >
      {children}
    </motion.ul>
  )
}
