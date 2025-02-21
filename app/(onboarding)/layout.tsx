import { PropsWithChildren } from 'react'

import SplashScreen from '../../shared/components/common/splash-screen'

export default function OnboardingLayout({ children }: PropsWithChildren) {
  return (
    <div className="px-[20px]">
      <SplashScreen />
      {children}
    </div>
  )
}
