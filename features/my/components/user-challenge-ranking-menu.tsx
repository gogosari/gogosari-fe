import MenuGroup from './menu-group'
import MenuItem from './menu-item'

export default function UserChallengeRankingMenu() {
  return (
    <MenuGroup title="채집왕 챌린지 & 랭킹 내역">
      <MenuItem>나의 랭킹</MenuItem>
      <MenuItem>완료한 미션 내역</MenuItem>
      <MenuItem>획득한 뱃지와 보상 포인트</MenuItem>
    </MenuGroup>
  )
}
