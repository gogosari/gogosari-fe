'use client'

import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from 'motion/react'
import { PropsWithChildren, useRef } from 'react'

export default function ScrollLinked({ children }: PropsWithChildren) {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)

  return (
    <div className="relative w-full max-w-[400px]">
      <svg
        className="absolute -top-[65px] -left-[15px] h-20 w-20 rotate-[-90deg]"
        width="80"
        height="80"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="fill-none stroke-[--layer] stroke-[10%]"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          className="fill-none stroke-[--accent] stroke-[10%]"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <motion.ul
        ref={ref}
        className="mx-auto flex h-[220px] gap-5 overflow-x-scroll px-0 py-5 [&::-webkit-scrollbar]:h-[5px] [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar]:rounded-[1ex] [&::-webkit-scrollbar]:bg-white/30 [&::-webkit-scrollbar-corner]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-[1ex] [&::-webkit-scrollbar-thumb]:bg-[--accent]"
        style={{ maskImage }}
      >
        {children}
      </motion.ul>
    </div>
  )
}

const left = `0%`
const right = `100%`
const leftInset = `0%`
const rightInset = `100%`
const transparent = `#0000`
const opaque = `#000`
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
  )

  useMotionValueEvent(scrollXProgress, 'change', (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`,
      )
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`,
      )
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`,
      )
    }
  })

  return maskImage
}
