import { useState } from 'react'

import NavDurupIcon from '@/public/svgs/nav-durup.svg'
import NavGosariIcon from '@/public/svgs/nav-gosari.svg'
import NavKkungmanungIcon from '@/public/svgs/nav-kkungmanung.svg'
import ScrollLinked from '@/shared/components/common/scroll-linked'

import ScrollOptionItem from './scroll-option-item'

const optionItems = [
  { id: 1, name: '고사리', Emoji: NavGosariIcon },
  { id: 2, name: '두릅', Emoji: NavDurupIcon },
  { id: 3, name: '꿩마농', Emoji: NavKkungmanungIcon },
  { id: 4, name: '취나물', Emoji: NavGosariIcon },
  { id: 5, name: '냉이', Emoji: NavGosariIcon },
  { id: 6, name: '근거리' },
  { id: 7, name: '찜' },
]

export default function ScrollOption() {
  const [selectedNames, setSelectedNames] = useState<string[]>([])

  const updateSelectName = (name: string) => {
    setSelectedNames((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    )
  }

  return (
    <div className="absolute top-[calc(100%+12px)] mx-auto h-full w-full max-w-[600px] overflow-hidden">
      <ScrollLinked>
        {optionItems.map(({ id, name, Emoji }) => (
          <ScrollOptionItem
            key={id}
            onSelect={updateSelectName}
            optionName={name}
            selected={selectedNames.includes(name)}
            Emoji={Emoji}
          />
        ))}
        <div className="pr-12" />
      </ScrollLinked>
    </div>
  )
}
