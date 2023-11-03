import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/lukeskw.png"
        alt=""
        className="h-10 w-10 rounded-full"
        width={200}
        height={200}
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          LukeSKW
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          lucasporfirioa@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
