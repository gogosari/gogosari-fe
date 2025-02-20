import { DialogTitle } from '@radix-ui/react-dialog'
import { Map } from 'react-kakao-maps-sdk'

import HeartIcon from '@/public/svgs/heart-outline.svg'

import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

export default function LocationInfoView() {
  return (
    <Sheet>
      <SheetTrigger className="flex cursor-pointer flex-col items-center gap-1">
        <HeartIcon />
        <span className="text-caption font-normal">위치제보</span>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="mx-auto h-full w-full max-w-screen-sm gap-[7px] rounded-t-[10px] border-none sm:w-[390px]"
      >
        <DialogTitle className="hidden"></DialogTitle>
        <Map
          center={{ lat: 33.450701, lng: 126.570667 }}
          className="absolute top-14 h-full w-full"
          level={3}
        />
        <div className="absolute bottom-0 z-50 flex w-full flex-col items-center gap-2.5 bg-white px-4 pt-5 pb-10">
          <span className="text-xl font-bold text-gray-950">
            <span className="text-primary-normal">고사리 스팟은</span> 바로 여기 주게!
          </span>
          <div className="flex w-full flex-col gap-3">
            <div className="bg-primary-light flex items-center justify-center rounded-lg py-3 text-base font-medium text-gray-950">
              제주도특별자치도 서귀포시 동류암로 20
            </div>
            <Button size="lg" className="h-12 cursor-pointer text-base font-semibold">
              등록하기
            </Button>
          </div>
        </div>
        {/* <SheetDescription className="bg-w mx-auto flex items-center gap-[3px] pt-14 pb-0 text-2xl font-bold text-gray-950">
          <span className="text-primary-normal">고사리 스팟은</span> 바로 여기 주게!
        </SheetDescription>
        <SheetFooter className="mt-0 gap-2 pt-0 pb-10">
          <div className="bg-primary-light flex items-center justify-center rounded-lg py-3 text-base font-medium text-gray-950">
            제주도특별자치도 서귀포시 동류암로 20
          </div>
          <Button size="lg" className="h-12 cursor-pointer text-base font-semibold">
            등록하기
          </Button>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
