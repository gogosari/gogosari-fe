import Image from 'next/image'

import myImage from '@/public/images/my.png'
import Header from '@/shared/components/common/header'

export default function MyPage() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <Header>위치제보</Header>
      <div className="h-[323px] w-[323px]">
        <Image src={myImage} alt="my-page" width={323} height={323} />
      </div>
    </div>
  )
}
