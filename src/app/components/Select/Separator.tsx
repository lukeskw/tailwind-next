'use client'

import * as Select from '@radix-ui/react-select'

export type SeparatorProps = Select.SelectSeparatorProps

export function Separator(props: SeparatorProps) {
  return <Select.Separator {...props} />
}
