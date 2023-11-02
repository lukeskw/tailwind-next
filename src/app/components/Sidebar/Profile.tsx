import { LogOut } from 'lucide-react'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/lukeskw.png"
        alt=""
        className="h-10 w-10 rounded-full"
        width={200}
        height={200}
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          LukeSKW
        </span>
        <span className="truncate text-sm text-zinc-500">
          lucasporfirioa@gmail.comqwfqwfqwfwqf
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
