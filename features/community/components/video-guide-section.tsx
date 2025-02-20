import Image from 'next/image'

import videoImage1 from '@/public/images/video-1.png'
import videoImage2 from '@/public/images/video-2.png'
import PlayIcon from '@/public/svgs/play.svg'
import ScrollLinked from '@/shared/components/common/scroll-linked'

export default function CommunityVideoGuideSection() {
  return (
    <section>
      <h2 className="mt-6 mb-1.5 text-lg font-bold">채집 영상 가이드</h2>
      <ScrollLinked>
        <li>
          <div className="relative h-[350px] w-[250px] overflow-hidden rounded-xl">
            <Image src={videoImage1} alt="" width={250} height={350} />
            <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </li>
        <li>
          <div className="relative h-[350px] w-[250px] overflow-hidden rounded-xl">
            <Image src={videoImage2} alt="" width={250} height={350} />
            <PlayIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </li>
      </ScrollLinked>
    </section>
  )
}
