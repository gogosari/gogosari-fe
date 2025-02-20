'use client'

import { useState } from 'react'

import togetherImage1 from '@/public/images/together-1.png'
import togetherImage2 from '@/public/images/together-2.png'
import togetherImage3 from '@/public/images/together-3.png'
import togetherImage4 from '@/public/images/together-4.png'

import { TOGETHER_1, TOGETHER_2, TOGETHER_3, TOGETHER_4 } from '../../constants'
import OnboardingButtons from '../buttons/buttons'
import SkipButton from '../buttons/skip-button'
import OnboardingRadio from '../radio'
import OnboardingTitle from '../title'

interface Props {
  onNext: (together: string) => void
}

const options = [
  { src: togetherImage1, title: TOGETHER_1 },
  { src: togetherImage2, title: TOGETHER_2 },
  { src: togetherImage3, title: TOGETHER_3 },
  { src: togetherImage4, title: TOGETHER_4 },
]

export default function TogetherStep({ onNext }: Props) {
  const [option, setOption] = useState('')

  return (
    <div className="relative h-dvh">
      <OnboardingTitle>
        누구와 함께 고사리를 <br />
        같이 따젠?
      </OnboardingTitle>
      <OnboardingRadio options={options} option={option} setOption={setOption} />
      <SkipButton className="mt-3.5" />
      <OnboardingButtons onNextClick={() => onNext(option)} disabled={!option} />
    </div>
  )
}
