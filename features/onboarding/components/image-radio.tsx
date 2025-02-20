import Image, { StaticImageData } from 'next/image'

import CheckIcon from '@/public/svgs/check.svg'
import { Label } from '@/shared/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group'
import { cn } from '@/shared/lib/utils'

interface OptionsModel {
  src: string | StaticImageData
  label: string
}

interface Props {
  options: OptionsModel[]
  option: string
  setOption: (option: string) => void
}

export default function OnboardingImageRadio({ options, option, setOption }: Props) {
  return (
    <RadioGroup
      defaultValue={option}
      onValueChange={(value) => setOption(value)}
      className="grid grid-cols-2 gap-3"
    >
      {options.map((item) => (
        <div
          key={item.label}
          className={cn(
            'cursor-pointer overflow-hidden rounded-xl border-1',
            item.label === option
              ? 'border-primary bg-primary/10'
              : 'border-gray-50 bg-gray-50 shadow-md',
          )}
        >
          <RadioGroupItem value={item.label} id={item.label} className="peer sr-only" />
          <Label htmlFor={item.label} className="block h-[180px] w-full cursor-pointer rounded-xl">
            <div className="relative h-full w-full">
              <Image src={item.src} alt="" priority={true} fill className="object-cover" />
              {item.label === option && (
                <div className="bg-primary/50 absolute inset-0 z-10 flex items-center justify-center">
                  <CheckIcon />
                </div>
              )}
            </div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  )
}
