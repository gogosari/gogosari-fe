import { PropsWithChildren } from 'react'

import SplashScreen from '../../shared/components/common/splash-screen'

export default function OnboardingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <SplashScreen />
      <div className="px-[20px]">{children}</div>
    </>
  )
}
