'use client'

import BottomSection from '@/features/map/components/bottom-section'
import TopSection from '@/features/map/components/top-section'
import KakaoMap from '@/shared/components/common/kakao-map'
import SplashScreen from '@/shared/components/common/splash-screen'
import { useOnboardingRedirect } from '@/shared/hooks/use-onboarding-redirect'

export default function MainPage() {
  useOnboardingRedirect()

  return (
    <div className="flex h-full w-full items-center justify-center">
      <SplashScreen />
      <TopSection />
      <KakaoMap center={{ lat: 33.450701, lng: 126.570667 }} />
      <BottomSection />
    </div>
  )
}
