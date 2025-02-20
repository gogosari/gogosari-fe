import GosariInfoCard from './gosari-info-card'
import GosariWeather from './gosari-weather'

export default function BottomSection() {
  return (
    <section className="absolute bottom-[86px] z-50 flex w-full flex-col gap-3 px-[12px]">
      <GosariWeather />
      <GosariInfoCard />
    </section>
  )
}
