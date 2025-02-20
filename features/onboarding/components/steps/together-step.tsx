'use client'

import { useState } from 'react'

import togetherImage1 from '@/public/images/together-1.png'
import togetherImage2 from '@/public/images/together-2.png'
import togetherImage3 from '@/public/images/together-3.png'
import togetherImage4 from '@/public/images/together-4.png'

import OnboardingButtons from '../buttons/buttons'
import SkipButton from '../buttons/skip-button'
import OnboardingRadio from '../radio'
import OnboardingTitle from '../title'

interface Props {
  onNext: (together: string) => void
}

const options = [
  { src: togetherImage1, title: '혼자!' },
  { src: togetherImage2, title: '가족과 함께!' },
  { src: togetherImage3, title: '연인과 함께!' },
  { src: togetherImage4, title: '친구와 함께!' },
]

export default function TogetherStep({ onNext }: Props) {
  const [option, setOption] = useState('')

  return (
    <div className="relative h-dvh">
      <OnboardingTitle>
        누구와 함께 고사리를 <br />
        같이 캐젠?
      </OnboardingTitle>
      <OnboardingRadio options={options} option={option} setOption={setOption} />
      <SkipButton className="mt-3.5" />
      <OnboardingButtons onNextClick={() => onNext(option)} disabled={!option} />
    </div>
  )
}
