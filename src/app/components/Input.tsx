import { ComponentProps } from 'react'

export type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

export type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="padding-0 flex-1 border-0
  bg-transparent text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export default function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex  w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
