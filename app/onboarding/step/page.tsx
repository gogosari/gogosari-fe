'use client'

import { useFunnel } from '@use-funnel/browser'

import BugStep from '@/features/onboarding/components/steps/bug-step'
import ExperienceStep from '@/features/onboarding/components/steps/experience-step'
import ShapeStep from '@/features/onboarding/components/steps/shape-step'
import WithStep from '@/features/onboarding/components/steps/together-step'
import { OnboardingModel } from '@/features/onboarding/types'

export default function OnboardingStepPage() {
  const funnel = useFunnel<OnboardingModel>({
    id: 'onboarding',
    initial: {
      step: 'experience',
      context: {},
    },
  })

  return (
    <div>
      <funnel.Render
        experience={({ history }) => (
          <ExperienceStep onNext={(experience) => history.push('together', { experience })} />
        )}
        together={({ history }) => (
          <WithStep onNext={(together) => history.push('bug', { together })} />
        )}
        bug={({ history }) => <BugStep onNext={(bug) => history.push('shape', { bug })} />}
        shape={({ context }) => <ShapeStep data={context} />}
      />
    </div>
  )
}
