interface Props {
  title: string
  content: string
}

export default function OnboardingResultTypeItem({ title, content }: Props) {
  return (
    <div className="border-primary flex h-[130px] w-[130px] flex-col items-center justify-center rounded-md border-1">
      <h2 className="text-primary text-sm font-bold">{title}</h2>
      <p className="text-sm font-medium text-gray-500">{content}</p>
    </div>
  )
}
