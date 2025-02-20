'use client'

import { useState } from 'react'

import bugImage1 from '@/public/images/bug-1.png'
import bugImage2 from '@/public/images/bug-2.png'
import bugImage3 from '@/public/images/bug-3.png'
import bugImage4 from '@/public/images/bug-4.png'

import { BUG_1, BUG_2, BUG_3, BUG_4 } from '../../constants'
import OnboardingButtons from '../buttons/buttons'
import SkipButton from '../buttons/skip-button'
import OnboardingRadio from '../radio'
import OnboardingTitle from '../title'

interface Props {
  onNext: (bug: string) => void
}

const options = [
  { src: bugImage1, title: BUG_1 },
  { src: bugImage2, title: BUG_2 },
  { src: bugImage3, title: BUG_3 },
  { src: bugImage4, title: BUG_4 },
]

export default function BugStep({ onNext }: Props) {
  const [option, setOption] = useState('')

  return (
    <div className="relative h-dvh">
      <OnboardingTitle>
        고사리를 따러 가신디, <br />
        벌레 나타나면 어떡하젠?
      </OnboardingTitle>
      <OnboardingRadio options={options} option={option} setOption={setOption} />
      <SkipButton className="mt-3.5" />
      <OnboardingButtons onNextClick={() => onNext(option)} disabled={!option} />
    </div>
  )
}
