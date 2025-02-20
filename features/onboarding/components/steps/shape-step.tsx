'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import shapeImage1 from '@/public/images/shape-1.png'
import shapeImage2 from '@/public/images/shape-2.webp'
import shapeImage3 from '@/public/images/shape-3.png'
import shapeImage4 from '@/public/images/shape-4.png'

import { SHAPE_1, SHAPE_2, SHAPE_3, SHAPE_4 } from '../../constants'
import { getResultType } from '../../results'
import { type ShapeStep } from '../../types'
import OnboardingButtons from '../buttons/buttons'
import SkipButton from '../buttons/skip-button'
import OnboardingImageRadio from '../image-radio'
import OnboardingTitle from '../title'

interface Props {
  data: ShapeStep
}

const options = [
  { src: shapeImage1, label: SHAPE_1 },
  { src: shapeImage2, label: SHAPE_2 },
  { src: shapeImage3, label: SHAPE_3 },
  { src: shapeImage4, label: SHAPE_4 },
]

export default function ShapeStep({ data }: Props) {
  const [option, setOption] = useState('')

  const router = useRouter()

  const handleSubmit = () => {
    const finalData = { ...data, shape: option }
    const resultType = getResultType(finalData)

    router.push(`result?type=${resultType}`)
  }

  return (
    <div className="relative h-dvh">
      <OnboardingTitle>
        이 중에서 고사리는
        <br />
        어떤 모양이우꽈?
      </OnboardingTitle>
      <OnboardingImageRadio options={options} option={option} setOption={setOption} />
      <SkipButton className="mt-3.5" />
      <OnboardingButtons onNextClick={handleSubmit} />
    </div>
  )
}
