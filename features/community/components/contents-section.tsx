'use client'

import Image from 'next/image'
import { toast } from 'sonner'

import BackgroundImage1 from '@/public/images/community-contents-1.png'
import BackgroundImage2 from '@/public/images/community-contents-2.png'
import BackgroundImage3 from '@/public/images/community-contents-3.png'
import ScrollLinked from '@/shared/components/common/scroll-linked'
import { Button } from '@/shared/components/ui/button'
import { TOAST_WAITING } from '@/shared/constants/toast'

export default function CommunityContentsSection() {
  const handleClick = () => {
    toast(TOAST_WAITING)
  }

  return (
    <section>
      <h2 className="mt-6 mb-1.5 text-lg font-bold">고사리 얼마나 캐봔?</h2>
      <ScrollLinked>
        <li>
          <Button
            className="relative h-[160px] w-[160px] items-baseline justify-baseline overflow-hidden rounded-xl p-0 text-left"
            onClick={handleClick}
          >
            <Image src={BackgroundImage1} alt="" fill className="object-cover" />
            <div className="relative p-3 text-white">
              <p className="text-sm font-medium">고사리 준비물</p>
              <p className="text-lg font-bold">알려드립니다!</p>
            </div>
          </Button>
        </li>
        <li>
          <Button
            className="relative h-[160px] w-[160px] items-baseline justify-baseline overflow-hidden rounded-xl p-0 text-left text-black"
            onClick={handleClick}
          >
            <Image src={BackgroundImage2} alt="" fill className="object-cover" />
            <div className="relative p-3">
              <p className="text-sm font-medium">초보자도 쉽게하는</p>
              <p className="text-lg font-bold">난이도 별 코스</p>
            </div>
          </Button>
        </li>
        <li>
          <Button
            className="relative h-[160px] w-[160px] items-baseline justify-baseline overflow-hidden rounded-xl p-0 text-left"
            onClick={handleClick}
          >
            <Image src={BackgroundImage3} alt="" fill className="object-cover" />
            <div className="relative p-3 text-white">
              <p className="text-sm font-medium">초보자도 쉽게하는</p>
              <p className="text-lg font-bold">구분 가이드</p>
            </div>
          </Button>
        </li>
      </ScrollLinked>
    </section>
  )
}
