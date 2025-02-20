'use client'

import { useState } from 'react'

import bugImage1 from '@/public/images/bug-1.png'
import bugImage2 from '@/public/images/bug-2.png'
import bugImage3 from '@/public/images/bug-3.png'
import bugImage4 from '@/public/images/bug-4.png'

import OnboardingButtons from '../buttons/buttons'
import SkipButton from '../buttons/skip-button'
import OnboardingRadio from '../radio'
import OnboardingTitle from '../title'

interface Props {
  onNext: (bug: string) => void
}

const options = [
  { src: bugImage1, title: '도망간다!' },
  { src: bugImage2, title: '애완 벌레로 키운다!' },
  { src: bugImage3, title: '신경 안 쓴다!' },
  { src: bugImage4, title: '좋은 곳에 보내준다!' },
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
