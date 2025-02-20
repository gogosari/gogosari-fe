import { motion } from 'motion/react'
import { FC, SVGProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ScrollOptionItemProps = {
  onSelect: (optionName: string) => void
  optionName: string
  selected: boolean
  Emoji?: FC<SVGProps<SVGSVGElement>>
}

export default function ScrollOptionItem({
  onSelect,
  optionName,
  selected,
  Emoji,
}: ScrollOptionItemProps) {
  const handleSelecteOption = () => {
    onSelect(optionName)
  }

  /** @TODO 메인 컬러 정의 필요 */
  const className = twMerge(
    'flex h-8 cursor-pointer items-center justify-center gap-0.5 rounded-full bg-white px-[18px] py-2 whitespace-nowrap shadow',
    selected ? 'bg-[#00D492] text-white' : 'bg-white text-black',
  )

  return (
    <motion.li onClick={handleSelecteOption} className={className}>
      {Emoji && <Emoji className="w-3.5 flex-1" />}
      <span className="text-xs font-semibold">{optionName}</span>
    </motion.li>
  )
}
