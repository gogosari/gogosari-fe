import Image from 'next/image'

import gosariImage from '@/public/images/gosari.png'
import MarkerIcon from '@/public/svgs/marker.svg'

export default function GosariInfoCard() {
  return (
    <div className="flex w-full gap-2.5 rounded-[20px] bg-white px-[11px] py-[15px]">
      <Image className="rounded-xl" src={gosariImage} alt="dummy-gosari" width={150} height={150} />
      <div className="flex flex-col justify-between py-1">
        <div className="flex flex-col gap-0.5 text-gray-950">
          <div className="flex items-center gap-1.5 text-base font-bold">
            <span>고사리 위치</span>
            <MarkerIcon className="text-primary-normal" />
          </div>
          <span className="text-xs font-medium">제주 특별자치도 제주시 노형동 2023동</span>
        </div>
        <div className="flex flex-col">
          <span className="text-primary-normal text-caption font-bold">대표 키워드</span>
          <div className="text-caption flex flex-col text-gray-500">
            <span>#길이 어려워요 #나물이 많아요</span>
            <span>#가시밭 #야생동물 출현</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary-normal text-xs font-bold">좋아요 12개</span>
          <hr className="h-2.5 w-[1px] bg-slate-400" />
          <span className="text-xs font-bold text-gray-950">최근 방문 28명</span>
        </div>
      </div>
    </div>
  )
}
