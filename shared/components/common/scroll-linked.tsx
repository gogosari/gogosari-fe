'use client'

import { motion, useScroll } from 'motion/react'
import { PropsWithChildren, useRef } from 'react'

import useScrollOverflowMask from '../../hooks/use-scroll-overflow-mask'

export default function ScrollLinked({ children }: PropsWithChildren) {
  const container = useRef<HTMLUListElement | null>(null)

  const { scrollXProgress } = useScroll({ container })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <motion.ul
      ref={container}
      className="scrollbar-none m-0 flex h-full list-none gap-2 overflow-x-scroll p-0 [&::-webkit-scrollbar]:hidden"
      style={{ maskImage }}
    >
      {children}
    </motion.ul>
  )
}
