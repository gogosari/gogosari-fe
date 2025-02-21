'use client'

import BottomSection from '@/features/map/components/bottom-section'
import MainMap from '@/features/map/components/main-map'
import TopSection from '@/features/map/components/top-section'
import { useOnboardingRedirect } from '@/shared/hooks/use-onboarding-redirect'

export default function MainPage() {
  useOnboardingRedirect()

  return (
    <div className="flex h-full w-full items-center justify-center">
      <TopSection />
      <MainMap />
      <BottomSection />
    </div>
  )
}
