import CommunityContentsSection from '@/features/community/components/contents-section'
import CommunityHotSpotSection from '@/features/community/components/hot-spot-section'
import CommunityTipSection from '@/features/community/components/tip-section'
import CommunityVideoGuideSection from '@/features/community/components/video-guide-section'
import Header from '@/shared/components/common/header'

export default function CommunityPage() {
  return (
    <div className="px-5 pb-[80px]">
      <Header>커뮤니티</Header>
      <CommunityHotSpotSection />
      <CommunityContentsSection />
      <CommunityVideoGuideSection />
      <CommunityTipSection />
    </div>
  )
}
