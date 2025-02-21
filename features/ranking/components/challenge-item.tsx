'use client'

import Image from 'next/image'
import { toast } from 'sonner'

import leafImage from '@/public/images/challenge-leaf.png'
import UserIcon from '@/public/svgs/challenge-user.svg'
import ChevronRightIcon from '@/public/svgs/chevron-right-big.svg'
import { Progress } from '@/shared/components/ui/progress'
import { TOAST_WAITING } from '@/shared/constants/toast'

import { ChallengeModel } from '../challenges'

interface Props {
  challenge: ChallengeModel
}

export default function RankingChallengeItem({ challenge }: Props) {
  const { title, subtitle, users, likes, percent, image } = challenge

  const handleClick = () => {
    toast(TOAST_WAITING)
  }

  return (
    <li className="border-primary/50 rounded-xl border bg-white p-3 shadow-md">
      <button className="flex w-full items-center justify-between text-left" onClick={handleClick}>
        <div className="flex items-center gap-[7px]">
          <div className="flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[6px]">
            <Image src={image} alt="가방" width={80} height={80} />
          </div>
          <div>
            <p className="text-sm font-medium">{subtitle}</p>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex gap-1.5">
              <span className="flex items-center">
                <UserIcon /> {users}
              </span>
              <span className="flex items-center">
                <Image src={leafImage} width={16} height={16} alt="" />
                {likes}
              </span>
            </div>
          </div>
        </div>
        <ChevronRightIcon />
      </button>
      <Progress value={percent} className="mt-[5px]" />
    </li>
  )
}
