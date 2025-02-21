'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import SplashImage from '@/public/images/splash-image.png'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      onAnimationComplete={() => setIsVisible(false)}
      className="absolute inset-0 z-100 h-full w-full"
    >
      <Image
        src={SplashImage}
        alt="splash-image"
        fill
        objectFit="cover"
        objectPosition="center"
        priority
      />
    </motion.div>
  )
}
