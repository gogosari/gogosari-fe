import { Button } from '@/shared/components/ui/button'

export default function NextButton({ ...props }: React.ComponentProps<'button'>) {
  return (
    <Button size="full" {...props}>
      다음
    </Button>
  )
}
