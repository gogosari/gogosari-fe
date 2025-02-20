'use client'

import Image from 'next/image'
import { toast } from 'sonner'

import hotSpotBackgroundImage from '@/public/images/hot-spot-background.png'
import ChevronRightIcon from '@/public/svgs/chevron-right.svg'
import { Button } from '@/shared/components/ui/button'
import { TOAST_WAITING } from '@/shared/constants/toast'

export default function CommunityHotSpotSection() {
  const handleClick = () => {
    toast(TOAST_WAITING)
  }

  return (
    <section>
      <Button
        variant="ghost"
        onClick={handleClick}
        className="relative h-[316px] w-full items-baseline justify-baseline overflow-hidden rounded-xl p-0"
      >
        <Image src={hotSpotBackgroundImage} alt="" className="object-cover" fill />
        <div className="relative px-5 py-7">
          <p className="text-lg font-medium text-white">날씨도 좋은데, 오늘 뭐하멘?</p>
          <h2 className="flex items-center gap-1 text-2xl font-bold text-white">
            고사리 인기스팟 <ChevronRightIcon />
          </h2>
        </div>
      </Button>
    </section>
  )
}
