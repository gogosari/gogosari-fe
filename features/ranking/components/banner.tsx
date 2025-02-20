'use client'

import Image from 'next/image'
import { toast } from 'sonner'

import BannerImage from '@/public/images/ranking-banner.png'
import ChevronRightIcon from '@/public/svgs/chevron-right.svg'
import { Button } from '@/shared/components/ui/button'
import { TOAST_WAITING } from '@/shared/constants/toast'

export default function RankingBanner() {
  const handleClick = () => {
    toast(TOAST_WAITING)
  }

  return (
    <section className="-mt-5">
      <Button
        variant="ghost"
        onClick={handleClick}
        className="relative h-[243px] w-full items-baseline justify-baseline p-0"
      >
        <Image src={BannerImage} alt="" priority={true} fill className="object-cover" />
        <div className="relative px-5 py-7 text-left">
          <p className="text-xs font-medium text-white">오늘의 고사리 수집왕 보러가기</p>
          <h2 className="mt-2 flex items-end text-xl font-bold text-white">
            다들, 오늘 고사리를 <br /> 얼마나 모왔수꽈?{' '}
            <ChevronRightIcon className="mb-1.5 -ml-2.5" />
          </h2>
        </div>
      </Button>
    </section>
  )
}
