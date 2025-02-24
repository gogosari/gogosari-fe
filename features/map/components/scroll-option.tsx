import { useState } from 'react'

import ScrollLinked from '@/shared/components/common/scroll-linked'

import { useCategory } from '../hooks/use-category'
import ScrollOptionItem from './scroll-option-item'

export default function ScrollOption() {
  const [selectedName, setSelectedName] = useState(1)

  const { data } = useCategory()

  return (
    <div className="absolute top-[calc(100%+12px)] mx-auto h-full w-full max-w-[600px] overflow-hidden">
      <ScrollLinked className="gap-1">
        {data?.map(({ id, name, code }) => (
          <ScrollOptionItem
            key={id}
            onSelect={() => setSelectedName(id)}
            optionName={name}
            selected={selectedName === id}
            emoji={code}
          />
        ))}
        <div className="pr-12" />
      </ScrollLinked>
    </div>
  )
}
