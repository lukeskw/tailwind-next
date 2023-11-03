'use client'
import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-slate-800 dark:hover:text-violet-300 "
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-slate-700 dark:bg-slate-800 dark:group-hover:border-slate-600 dark:group-hover:bg-slate-700">
        <UploadCloud className="h-5 w-5 text-zinc-500 group-hover:text-violet-600  dark:text-zinc-500 dark:group-hover:text-violet-300 " />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span
            className="font-semibold text-violet-600
          dark:text-violet-300"
          >
            Click to upload
          </span>
          <span className="sr-only lg:not-sr-only"> or drag and drop</span>
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
