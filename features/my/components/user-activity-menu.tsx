import MenuGroup from './menu-group'
import MenuItem from './menu-item'

export default function UserActivityMenu() {
  return (
    <MenuGroup title="나의 활동 내역">
      <MenuItem>최근 방문한 스팟</MenuItem>
      <MenuItem>고사리 채집 스팟 관리</MenuItem>
    </MenuGroup>
  )
}
