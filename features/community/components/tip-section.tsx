'use client'

import Image from 'next/image'
import { toast } from 'sonner'

import BackgroundImage1 from '@/public/images/tip-background1.png'
import BackgroundImage2 from '@/public/images/tip-background2.png'
import ScrollLinked from '@/shared/components/common/scroll-linked'
import { Button } from '@/shared/components/ui/button'
import { TOAST_WAITING } from '@/shared/constants/toast'

export default function CommunityTipSection() {
  const handleClick = () => {
    toast(TOAST_WAITING)
  }

  return (
    <section>
      <h2 className="mt-6 mb-1.5 text-lg font-bold">고사리 꿀팁</h2>
      <ScrollLinked>
        <li>
          <Button
            className="relative h-[100px] w-[288px] overflow-hidden rounded-xl p-0 text-left"
            onClick={handleClick}
          >
            <Image src={BackgroundImage1} alt="" fill className="object-cover" />
            <div className="relative p-3 text-white">
              <p className="text-lg font-bold">고사리 레시피 추천</p>
            </div>
          </Button>
        </li>
        <li>
          <Button
            className="relative h-[100px] w-[288px] overflow-hidden rounded-xl p-0 text-left"
            onClick={handleClick}
          >
            <Image src={BackgroundImage2} alt="" fill className="object-cover" />
            <div className="relative p-3 text-white">
              <p className="text-lg font-bold">고사리 직거래 장터</p>
            </div>
          </Button>
        </li>
      </ScrollLinked>
    </section>
  )
}
