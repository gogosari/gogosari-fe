import { PropsWithChildren } from 'react'

export default function OnboardingTitle({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="pt-14 text-2xl font-bold">{children}</h1>
      <p className="mb-6 text-sm">네 가지 중 하나를 선택합서양~</p>
    </>
  )
}
