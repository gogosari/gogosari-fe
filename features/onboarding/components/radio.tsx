import Image, { StaticImageData } from 'next/image'

import { Label } from '@/shared/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group'
import { cn } from '@/shared/lib/utils'

interface OptionsModel {
  src: string | StaticImageData
  title: string
}

interface Props {
  options: OptionsModel[]
  option: string
  setOption: (option: string) => void
}

export default function OnboardingRadio({ options, option, setOption }: Props) {
  return (
    <RadioGroup
      defaultValue={option}
      onValueChange={(value) => setOption(value)}
      className="grid grid-cols-2 gap-3"
    >
      {options.map((item) => (
        <div
          key={item.title}
          className={cn(
            'cursor-pointer rounded-xl border-1',
            item.title === option
              ? 'border-primary bg-primary/10'
              : 'border-gray-50 bg-gray-50 shadow-md',
          )}
        >
          <RadioGroupItem value={item.title} id={item.title} className="peer sr-only" />
          <Label
            htmlFor={item.title}
            className="flex h-[180px] cursor-pointer flex-col content-center items-center p-4 text-center text-lg font-medium"
          >
            <Image src={item.src} alt="" priority={true} width={120} height={109} />
            <p className={cn('text-base', item.title === option ? 'font-bold' : '')}>
              {item.title}
            </p>
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
