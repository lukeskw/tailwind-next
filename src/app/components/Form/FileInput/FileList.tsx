'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
  const { files, onFileDelete } = useFileInput()
  const [parent] = useAutoAnimate()
  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            file={file}
            onFileDelete={onFileDelete}
            state="complete"
          />
        )
      })}
    </div>
  )
}
