import NextButton from './next-button'
import PrevButton from './prev-button'

interface Props {
  onNextClick: () => void
  disabled?: boolean
}

export default function OnboardingButtons({ onNextClick, disabled }: Props) {
  return (
    <div className="absolute right-0 bottom-4 left-0 flex gap-2">
      <PrevButton className="flex-1" />
      <NextButton className="flex-2" onClick={onNextClick} disabled={disabled} />
    </div>
  )
}
