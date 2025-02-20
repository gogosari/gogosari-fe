'use client'

import { useState } from 'react'

import experienceImage1 from '@/public/images/experience-1.png'
import experienceImage2 from '@/public/images/experience-2.png'
import experienceImage3 from '@/public/images/experience-3.png'
import experienceImage4 from '@/public/images/experience-4.png'

import OnboardingButtons from '../buttons/buttons'
import SkipButton from '../buttons/skip-button'
import OnboardingRadio from '../radio'
import OnboardingTitle from '../title'

interface Props {
  onNext: (experience: string) => void
}

const options = [
  { src: experienceImage1, title: '처음이에요!' },
  { src: experienceImage2, title: '몇 번 해봤어요!' },
  { src: experienceImage3, title: '종종 나가요!' },
  { src: experienceImage4, title: '매일 나가요!' },
]

export default function ExperienceStep({ onNext }: Props) {
  const [option, setOption] = useState('')

  return (
    <div className="relative h-dvh">
      <OnboardingTitle>
        고사리를 직접 <br />캐 본적 인?
      </OnboardingTitle>
      <OnboardingRadio options={options} option={option} setOption={setOption} />
      <SkipButton className="mt-3.5" />
      <OnboardingButtons onNextClick={() => onNext(option)} disabled={!option} />
    </div>
  )
}
