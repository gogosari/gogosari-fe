'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/ui/button'

export default function PrevButton({ ...props }: React.ComponentProps<'button'>) {
  const router = useRouter()

  const handleBackClick = () => router.back()

  return (
    <Button size="full" variant="back" {...props} onClick={handleBackClick}>
      이전
    </Button>
  )
}
