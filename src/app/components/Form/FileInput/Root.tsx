'use client'
import {
  ComponentProps,
  MouseEventHandler,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

interface FileInputContextType {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
  onFileDelete: (file: File) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      return setFiles((state) => [...state, ...files])
    }
    setFiles(files)
  }

  function onFileDelete(file: File) {
    setFiles((state) =>
      state.filter((f) => file.name !== f.name || f.size !== file.size),
    )
  }
  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onFileDelete }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
