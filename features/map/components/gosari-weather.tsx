import SunIcon from '@/public/svgs/sun.svg'

export default function GosariWeather() {
  return (
    <div className="flex h-9 items-center justify-center gap-1 rounded-2xl bg-black/70">
      <SunIcon className="text-primary-normal" />
      <div className="text-sm font-semibold text-white">
        오늘은 고사리 캐기 좋은 날! <span className="text-primary-normal">현재 온도 14°</span>
      </div>
    </div>
  )
}
