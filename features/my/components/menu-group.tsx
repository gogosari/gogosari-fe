import { PropsWithChildren } from 'react'

type MenuGroupProps = PropsWithChildren<{
  title: string
}>

export default function MenuGroup({ title, children }: MenuGroupProps) {
  return (
    <div className="border-charcoal-100 w-full rounded-2xl border bg-white">
      <div className="px-4 py-2.5 text-sm font-semibold text-gray-700">{title}</div>
      {children}
    </div>
  )
}
