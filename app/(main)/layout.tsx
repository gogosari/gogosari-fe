import { PropsWithChildren } from 'react'

import TabBar from '@/shared/components/common/tab-bar'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <TabBar />
    </>
  )
}
