import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 active:opacity-80',

  variants: {
    variant: {
      primary:
        'bg-violet-500 text-white hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-500',
      ghost:
        'rounded-md px-2 hover:bg-zinc-100 shadow-none text-zinc-500 dark:hover:bg-white/5 dark:text-zinc-400',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-slate-800',
      error:
        'text-sm font-semibold text-error-500 border border-error-300 hover:text-error-700 hover:bg-zinc-100 dark:text-error-400 dark:hover:text-error-300 dark:hover:bg-white/5',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
