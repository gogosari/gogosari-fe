import Image from 'next/image'
import Link from 'next/link'

import SkipButton from '@/features/onboarding/components/buttons/skip-button'
import campingImage from '@/public/images/camping.png'
import { Button } from '@/shared/components/ui/button'

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <Image
        src={campingImage}
        alt="캠핑"
        priority={true}
        width={88}
        height={88}
        className="mb-6"
      />
      <p className="text-sm">나와 맞는 고사리를 찾아가는 시간이우다</p>
      <h1 className="mb-4 text-2xl font-bold">당신의 고사리 스타일은?</h1>
      <p className="text-sm">
        고사리님에 대해 자세히 알려주크라양? <br />
        취향에 맞는 채집 장소를 추천해 드릴쿠다양. :)
      </p>
      <Button asChild size="full" className="mt-6 mb-2">
        <Link href="/onboarding/step">시작하기</Link>
      </Button>
      <SkipButton />
    </div>
  )
}
