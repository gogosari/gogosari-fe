import DocumentIcon from '@/public/svgs/document-outline.svg'
import HeartIcon from '@/public/svgs/heart-outline.svg'
import HomeIcon from '@/public/svgs/home-outline.svg'
import PeopleIcon from '@/public/svgs/people-outline.svg'
import RankingIcon from '@/public/svgs/ranking-outline.svg'

import TabBarItem from './tab-bar-item'

const menus = [
  { id: 1, NavIcon: HomeIcon, label: '홈', route: '/' },
  { id: 2, NavIcon: HeartIcon, label: '위치제보', route: '/report-location' },
  { id: 3, NavIcon: DocumentIcon, label: '커뮤니티', route: '/community' },
  { id: 4, NavIcon: RankingIcon, label: '채집왕', route: '/ranking' },
  { id: 5, NavIcon: PeopleIcon, label: '마이', route: '/my' },
]

export default function TabBar() {
  return (
    <nav
      aria-label="Main TabBar"
      className="fixed bottom-0 z-50 flex w-full max-w-screen-sm items-center justify-between overflow-x-hidden bg-white px-[22.5px] py-2 shadow-2xl sm:w-[390px]"
    >
      {menus.map(({ NavIcon, id, label, route }) => (
        <TabBarItem key={id} label={label} route={route}>
          <NavIcon />
        </TabBarItem>
      ))}
    </nav>
  )
}
