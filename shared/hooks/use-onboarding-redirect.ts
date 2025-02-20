import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useOnboardingRedirect = () => {
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isOnboardingCompleted = localStorage.getItem('onboardingCompleted')

    if (!isOnboardingCompleted) {
      router.push('/onboarding')
    }
  }, [router])
}
