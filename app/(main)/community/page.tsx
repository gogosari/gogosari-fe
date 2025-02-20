import CommunityContentsSection from '@/features/community/components/contents-section'
import CommunityHotSpotSection from '@/features/community/components/hot-spot-section'
import CommunityTipSection from '@/features/community/components/tip-section'
import CommunityVideoGuideSection from '@/features/community/components/video-guide-section'

export default function CommunityPage() {
  return (
    <div className="px-5 pb-[80px]">
      <CommunityHotSpotSection />
      <CommunityContentsSection />
      <CommunityVideoGuideSection />
      <CommunityTipSection />
    </div>
  )
}
