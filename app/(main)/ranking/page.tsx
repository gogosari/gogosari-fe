import RankingBanner from '@/features/ranking/components/banner'
import Header from '@/shared/components/common/header'

export default function RankingPage() {
  return (
    <>
      <Header>채집왕</Header>
      <RankingBanner />
      <div className="px-5 pb-[80px]"></div>
    </>
  )
}
