import TopSection from '@/features/map/components/top-section'
import KakaoMap from '@/shared/components/common/kakao-map'

export default function MainPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <TopSection />
      <KakaoMap />
    </div>
  )
}
