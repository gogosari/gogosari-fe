import BottomSection from '@/features/map/components/bottom-section'
import MainMap from '@/features/map/components/main-map'
import TopSection from '@/features/map/components/top-section'
import SplashScreen from '@/shared/components/common/splash-screen'

export default function MainPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <SplashScreen />
      <TopSection />
      <MainMap />
      <BottomSection />
    </div>
  )
}
