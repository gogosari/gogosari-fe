'use client'

import { useRouter } from 'next/navigation'

import BackIcon from '@/public/svgs/chevron-left.svg'

export default function BackButton() {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <button onClick={handleBackClick}>
      <BackIcon />
    </button>
  )
}
