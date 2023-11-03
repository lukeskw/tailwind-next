'use client'

import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

export type ItemTextProps = Select.SelectItemProps & {
  children: ReactNode
}

export function ItemText({ children }: ItemTextProps) {
  return (
    <Select.ItemText asChild>
      <span className="flex cursor-default items-center gap-2 text-left leading-5 text-black">
        {children}
      </span>
    </Select.ItemText>
  )
}
