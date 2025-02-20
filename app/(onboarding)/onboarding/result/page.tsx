'use client'

import { Suspense } from 'react'

import OnboardingResult from '@/features/onboarding/components/result'

export default function OnboardingResultPage() {
  return (
    <Suspense>
      <OnboardingResult />
    </Suspense>
  )
}
