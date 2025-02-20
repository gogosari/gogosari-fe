import BottomSection from '@/features/map/components/bottom-section'
import TopSection from '@/features/map/components/top-section'
import KakaoMap from '@/shared/components/common/kakao-map'

export default function MainPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <TopSection />
      <KakaoMap center={{ lat: 33.450701, lng: 126.570667 }} />
      <BottomSection />
    </div>
  )
}
