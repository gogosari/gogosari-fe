'use client'

import SearchIcon from '@/public/svgs/search.svg'
import { Input } from '@/shared/components/ui/input'

import ScrollOption from './scroll-option'

export default function TopSection() {
  return (
    <section className="absolute top-[25px] z-50 flex w-full flex-col gap-3 px-[27px]">
      <Input
        className="h-10 rounded-2xl border-0 bg-white text-sm font-medium shadow-2xl placeholder:text-slate-400"
        placeholder="어디로 채집하러 갈까마씸?"
        startIcon={<SearchIcon />}
      />
      <ScrollOption />
    </section>
  )
}
