'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/shared/components/ui/button'

import { results, ResultsType } from '../results'
import OnboardingResultTypeItem from './result-type-item'

export default function OnboardingResult() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const resultType = searchParams.get('type') || 'beginner'

  const handleClick = () => {
    localStorage.setItem('onboardingCompleted', 'true')
    router.push('/')
  }

  const { title, subtitle, type, image } = results[resultType as unknown as keyof ResultsType]

  return (
    <div className="relative flex h-dvh flex-col items-center" data-animate>
      <div className="pt-[46px] text-center">
        <p className="text-sm font-medium">축하함서양!</p>
        <h1 className="py-1.5 text-2xl font-bold">{title}</h1>
        <p className="text-sm">{subtitle}</p>
      </div>
      <Image src={image} alt={title} priority={true} width={268} height={190} className="py-7" />

      <ul className="grid grid-cols-2 gap-2">
        <li>
          <OnboardingResultTypeItem title="채집 스타일" content={type[0]} />
        </li>
        <li>
          <OnboardingResultTypeItem title="채집 욕구" content={type[1]} />
        </li>
        <li>
          <OnboardingResultTypeItem title="고사리 애정도" content={type[2]} />
        </li>
        <li>
          <OnboardingResultTypeItem title="고사리 지식" content={type[3]} />
        </li>
      </ul>

      <Button size="full" className="absolute right-0 bottom-4 left-0" onClick={handleClick}>
        고고사리 시작하기
      </Button>
    </div>
  )
}
