import MenuGroup from './menu-group'
import MenuItem from './menu-item'

export default function UserSettingsMenu() {
  return (
    <MenuGroup title="설정">
      <MenuItem>계정관리</MenuItem>
      <MenuItem>문의하기</MenuItem>
      <MenuItem>알림설정</MenuItem>
    </MenuGroup>
  )
}
