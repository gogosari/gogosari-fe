import ProfileBox from '@/features/my/components/profile-box'
import UserActivityMenu from '@/features/my/components/user-activity-menu'
import UserChallengeRankingMenu from '@/features/my/components/user-challenge-ranking-menu'
import UserCommunityMenu from '@/features/my/components/user-community-menu'
import UserSettingsMenu from '@/features/my/components/user-settings-menu'
import Header from '@/shared/components/common/header'

export default function MyPage() {
  return (
    <div className="flex h-full w-full flex-col items-center px-[11px]">
      <Header>마이페이지</Header>
      <div className="w-full overflow-y-auto">
        <ProfileBox />
        <div className="flex w-full flex-col gap-3">
          <UserActivityMenu />
          <UserCommunityMenu />
          <UserChallengeRankingMenu />
          <UserSettingsMenu />
        </div>
        <div className="h-[70px]" />
      </div>
    </div>
  )
}
