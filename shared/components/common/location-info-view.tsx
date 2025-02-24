import Link from 'next/link'

import LocationMap from '@/features/map/components/location-map'
import CloseIcon from '@/public/svgs/close.svg'
import HeartIcon from '@/public/svgs/heart-outline.svg'

import { Button } from '../ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'

export default function LocationInfoView() {
  return (
    <Sheet>
      <SheetTrigger className="flex cursor-pointer flex-col items-center">
        <HeartIcon />
        <span className="text-caption font-normal">위치제보</span>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="mx-auto h-full w-full max-w-screen-sm gap-0 rounded-t-[10px] border-none sm:w-[390px]"
      >
        <SheetHeader className="relative flex h-14 flex-row items-center justify-end border-b border-gray-200 px-4">
          <h1 className="absolute top-1/2 left-1/2 -translate-1/2 font-bold">위치제보</h1>
          <SheetClose className="ring-offset-background data-[state=open]:bg-secondary cursor-pointer rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none">
            <CloseIcon />
          </SheetClose>
        </SheetHeader>
        <LocationMap />
        <div className="absolute bottom-0 z-50 flex w-full flex-col items-center gap-2.5 bg-white px-4 pt-5 pb-10">
          <span className="text-xl font-bold text-gray-950">
            <span className="text-primary-normal">고사리 스팟은</span> 바로 여기 주게!
          </span>
          <div className="flex w-full flex-col gap-3">
            <div className="bg-primary-light flex items-center justify-center rounded-lg py-3 text-base font-medium text-gray-950">
              제주도특별자치도 서귀포시 동류암로 20
            </div>
            <Button size="lg" className="h-12 cursor-pointer text-base font-semibold" asChild>
              <Link href="/location-info">등록하기</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
