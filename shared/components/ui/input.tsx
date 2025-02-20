import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({
  className,
  type,
  startIcon,
  ...props
}: { startIcon?: React.ReactNode } & React.ComponentProps<'input'>) {
  return (
    <div className="relative w-full">
      {startIcon && (
        <div className="absolute top-1/2 left-5 -translate-y-1/2 transform">{startIcon}</div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground aria-invalid:outline-destructive/60 aria-invalid:ring-destructive/20 dark:aria-invalid:outline-destructive dark:aria-invalid:ring-destructive/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 aria-invalid:border-destructive/60 dark:aria-invalid:border-destructive flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-2.5 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-transparent focus:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:aria-invalid:ring-4',
          startIcon ? 'pl-14' : '',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
