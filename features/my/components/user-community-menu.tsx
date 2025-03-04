import MenuGroup from './menu-group'
import MenuItem from './menu-item'

export default function UserCommunityMenu() {
  return (
    <MenuGroup title="커뮤니티 내역">
      <MenuItem>작성 게시글</MenuItem>
      <MenuItem>최근 본 게시글</MenuItem>
      <MenuItem>남긴 댓글 & 좋아요 한 게시물</MenuItem>
    </MenuGroup>
  )
}
