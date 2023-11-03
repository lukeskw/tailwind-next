import SettingsTabs from '@/app/components/SettingsTabs'
import * as Input from '@/app/components/Input'
import * as FileInput from '@/app/components/Form/FileInput'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as Select from './components/Select'
import { CountrySelect } from './components/CountrySelect'
import { TextArea } from './components/TextArea'
import { Button } from './components/Button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.InputRoot>
                <Input.InputControl id="lastName" defaultValue="Luke" />
              </Input.InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last Name
                </label>
                <Input.InputRoot>
                  <Input.InputControl id="lastName" defaultValue="Porfirio" />
                </Input.InputRoot>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              E-mail Address
            </label>

            <Input.InputRoot>
              <Input.InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
              </Input.InputPrefix>
              <Input.InputControl
                id="email"
                type="email"
                defaultValue="lucasporfirioa@gmail.com"
              />
            </Input.InputRoot>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>

            <Input.InputRoot>
              <Input.InputControl id="role" defaultValue="Developer" />
            </Input.InputRoot>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>

            <CountrySelect />
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>

            <Select.Root name="timezone">
              <Select.Trigger>
                <Select.Value placeholder="Select your timezone..." />
              </Select.Trigger>

              <Select.Portal>
                <Select.SelectItem value="utc-3">
                  <Select.ItemText value="utc-3">
                    America São Paulo (UTC-03:00)
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      UTC 03:00
                    </span>
                  </Select.ItemText>
                </Select.SelectItem>
                <Select.SelectItem value="utc-8">
                  <Select.ItemText value="utc-8">
                    Pacific Standard Time (PST)
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      UTC 08:00
                    </span>
                  </Select.ItemText>
                </Select.SelectItem>
                <Select.SelectItem value="utc+2">
                  <Select.ItemText value="utc+2">
                    Eastern European Time (UTC+2:00)
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      UTC 02:00
                    </span>
                  </Select.ItemText>
                </Select.SelectItem>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction
              </span>
            </label>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select.Root name="bio" defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value placeholder="Select the type of text..." />
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.SelectItem value="normal">
                      <Select.ItemText>Normal text</Select.ItemText>
                    </Select.SelectItem>
                    <Select.SelectItem value="markdown">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.SelectItem>
                  </Select.Portal>
                </Select.Root>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500 dark:text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a Software Engineer based in Rio de Janeiro, Brazil. I specialise in frontend development with React and backend development with Laravel."
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Share some snippets of your work
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
