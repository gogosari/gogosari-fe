'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Map } from 'react-kakao-maps-sdk'

import RoadImage1 from '@/public/images/road-1.png'
import RoadImage2 from '@/public/images/road-2.png'
import RoadImage3 from '@/public/images/road-3.png'
import RoadImage4 from '@/public/images/road-4.png'
import Header from '@/shared/components/common/header'
import { Label } from '@/shared/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group'
import { cn } from '@/shared/lib/utils'

const roadOptions = [
  { title: '흙길', src: RoadImage1 },
  { title: '자갈밭', src: RoadImage2 },
  { title: '숲길', src: RoadImage3 },
  { title: '비포장', src: RoadImage4 },
]

export default function LocationInfoPage() {
  const [roadOption, setRoadOption] = useState('')

  return (
    <>
      <Header>위치제보</Header>
      <div className="flex flex-col gap-6 px-5 pb-[80px]">
        <Map center={{ lat: 33.450701, lng: 126.570667 }} className="h-[100px] w-full" level={3} />
        <section>
          <h2 className="mb-1 font-bold">고사리 출현 위치</h2>
          <div className="border-primary rounded-[8px] border py-2 text-center font-medium">
            제주도특별자치도 서귀포시 동류암로 20
          </div>
        </section>
        <section>
          <h2 className="mb-1 font-bold">고사리 만나러 가는 길</h2>
          <RadioGroup
            defaultValue={roadOption}
            onValueChange={(value) => setRoadOption(value)}
            className="grid grid-cols-4 gap-1"
          >
            {roadOptions.map((item) => (
              <div
                key={item.title}
                className={cn(
                  'cursor-pointer rounded-[6px] border-1',
                  item.title === roadOption ? 'border-primary bg-primary/10' : 'border-primary',
                )}
              >
                <RadioGroupItem value={item.title} id={item.title} className="peer sr-only" />
                <Label
                  htmlFor={item.title}
                  className="flex h-[84px] cursor-pointer flex-col content-center items-center justify-center text-center text-lg font-medium"
                >
                  <Image src={item.src} alt="" priority={true} width={32} height={32} />
                  <p className="text-base">{item.title}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </section>
        <section>
          <h2 className="mb-1 font-bold">고사리 카테고리</h2>
        </section>
      </div>
    </>
  )
}
