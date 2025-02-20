import { motion } from 'motion/react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type ScrollOptionItemProps = {
  onSelect: (optionName: string) => void
  optionName: string
  selected: boolean
  emoji: string
}

export default function ScrollOptionItem({
  onSelect,
  optionName,
  selected,
  emoji,
}: ScrollOptionItemProps) {
  const handleSelectOption = () => {
    onSelect(optionName)
  }

  const className = twMerge(
    'flex h-8 cursor-pointer items-center justify-center gap-0.5 rounded-full bg-white px-[18px] py-2 whitespace-nowrap shadow',
    selected ? 'bg-primary-normal text-white' : 'bg-white text-black',
  )

  return (
    <motion.li onClick={handleSelectOption} className={className}>
      {emoji && <Image src={`/svgs/${emoji}`} alt="" width={15} height={17} />}
      <span className="text-xs font-semibold">{optionName}</span>
    </motion.li>
  )
}
