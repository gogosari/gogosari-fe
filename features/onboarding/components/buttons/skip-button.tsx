'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
}

export default function SkipButton({ className }: Props) {
  const router = useRouter()

  const isBrowser = () => typeof window !== 'undefined'

  const handleClickSkip = () => {
    if (isBrowser()) {
      localStorage.setItem('onboardingCompleted', 'true')
      router.push('/')
    }
  }

  return (
    <Button
      variant="link"
      size="full"
      className={cn(
        'cursor-pointer text-center text-xs font-medium text-gray-500 underline',
        className,
      )}
      onClick={handleClickSkip}
    >
      서비스부터 둘러보고 싶어요.
    </Button>
  )
}
