'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MapMarker } from 'react-kakao-maps-sdk'

import categoryImage1 from '@/public/images/category-1.png'
import categoryImage2 from '@/public/images/category-2.png'
import categoryImage3 from '@/public/images/category-3.png'
import categoryImage4 from '@/public/images/category-4.png'
import categoryImage5 from '@/public/images/category-5.png'
import categoryImage6 from '@/public/images/category-6.png'
import categoryImage7 from '@/public/images/category-7.png'
import categoryImage8 from '@/public/images/category-8.png'
import GosariImage from '@/public/images/gosari-long.png'
import roadImage1 from '@/public/images/road-1.png'
import roadImage2 from '@/public/images/road-2.png'
import roadImage3 from '@/public/images/road-3.png'
import roadImage4 from '@/public/images/road-4.png'
import CameraIcon from '@/public/svgs/camera.svg'
import Header from '@/shared/components/common/header'
import KakaoMap from '@/shared/components/common/kakao-map'
import { Button } from '@/shared/components/ui/button'
import { Label } from '@/shared/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group'
import { cn } from '@/shared/lib/utils'

const roadOptions = [
  { title: '흙길', src: roadImage1 },
  { title: '자갈밭', src: roadImage2 },
  { title: '숲길', src: roadImage3 },
  { title: '비포장', src: roadImage4 },
]

const categoryOptions = [
  { title: '유료채집', src: categoryImage1 },
  { title: '무료채집', src: categoryImage2 },
  { title: '공동채집', src: categoryImage3 },
  { title: '한적한', src: categoryImage4 },
  { title: '초보자용', src: categoryImage5 },
  { title: '중급자용', src: categoryImage6 },
  { title: '전문가용', src: categoryImage7 },
  { title: '벌레많음', src: categoryImage8 },
]

export default function LocationInfoPage() {
  const [roadOption, setRoadOption] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const router = useRouter()

  const handleClickCategory = (title: string) => {
    setSelectedCategories((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title],
    )
  }

  const handleClickSubmit = () => {
    router.push('/')
  }

  return (
    <div className="bg-[#FCFDFF]">
      <Header hasBackButton={true}>위치제보</Header>
      <div className="flex flex-col gap-6 px-5 pb-[20px]">
        <KakaoMap center={{ lat: 33.4509, lng: 126.570669 }} className="h-[100px] w-full" level={3}>
          <MapMarker
            position={{ lat: 33.450701, lng: 126.570667 }}
            image={{ src: '/images/marker.png', size: { width: 58, height: 69 } }}
            title="스페이스닷원"
          />
        </KakaoMap>
        <section>
          <h2 className="mb-1 font-bold">고사리 출현 위치</h2>
          <div className="flex h-12 items-center justify-center rounded-[8px] border-[0.5px] border-gray-300 bg-slate-50 py-2 font-medium text-gray-500">
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
                  'cursor-pointer rounded-[6px] border-[0.5px] border-gray-300 bg-white text-gray-500',
                  item.title === roadOption && 'border-primary bg-primary/12',
                )}
              >
                <RadioGroupItem value={item.title} id={item.title} className="peer sr-only" />
                <Label
                  htmlFor={item.title}
                  className="flex h-[84px] cursor-pointer flex-col content-center items-center justify-center gap-0.5 text-center text-lg font-medium"
                >
                  <Image src={item.src} alt="" priority={true} width={32} height={32} />
                  <p className="text-xs leading-4 font-medium">{item.title}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </section>
        <section>
          <h2 className="mb-1 font-bold">고사리 카테고리</h2>
          <div className="grid grid-cols-4 gap-1">
            {categoryOptions.map((item) => (
              <div
                key={item.title}
                onClick={() => handleClickCategory(item.title)}
                className={cn(
                  'cursor-pointer rounded-[6px] border-[0.5px] border-gray-300 bg-white',
                  selectedCategories.includes(item.title) && 'border-primary bg-primary/12',
                )}
              >
                <div className="flex h-[84px] cursor-pointer flex-col content-center items-center justify-center gap-0.5 text-center text-lg font-medium text-gray-500">
                  <Image src={item.src} alt="" priority width={32} height={32} />
                  <p className="text-xs leading-4 font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex h-[147px] items-center justify-center overflow-hidden rounded-xl border border-gray-300">
          <CameraIcon />
          <Image src={GosariImage} alt="고사리" />
        </section>
        <Button size="full" onClick={handleClickSubmit}>
          등록하기
        </Button>
      </div>
    </div>
  )
}
