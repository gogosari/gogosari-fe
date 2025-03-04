'use client'

import Image from 'next/image'
import { toast } from 'sonner'

import profileImage from '@/public/images/profile.png'
import { TOAST_WAITING } from '@/shared/constants/toast'

export default function ProfileBox() {
  const handleUpdateProfile = () => {
    toast(TOAST_WAITING)
  }

  return (
    <div className="flex h-[95px] w-full items-center justify-between px-[15px]">
      <div className="flex items-center gap-2.5">
        <Image src={profileImage} alt="profile" width={50} height={50} className="rounded-full" />
        <div className="flex flex-col">
          <span className="text-sm leading-5 font-normal">고사리님</span>
          <span className="text-lg leading-7 font-semibold text-gray-950">환영해요!</span>
        </div>
      </div>
      <button
        className="border-primary-normal flex h-[27px] w-[88px] cursor-pointer items-center justify-center rounded-full border"
        onClick={handleUpdateProfile}
      >
        <span className="text-primary-normal text-sm leading-5 font-normal">프로필 수정</span>
      </button>
    </div>
  )
}
