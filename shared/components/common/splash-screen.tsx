'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import SplashImage from '@/public/images/splash-image.png'

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('visited')

    if (!hasVisited) {
      setIsVisible(true)
      sessionStorage.setItem('visited', 'true')

      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
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
