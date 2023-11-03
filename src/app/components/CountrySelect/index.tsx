'use client'

import { useState } from 'react'
import * as Select from '@/app/components/Select'
import { countries } from '@/utils/countries'
import Flag from 'react-world-flags'

type CountryCode = keyof typeof countries

export function CountrySelect() {
  const [value, setValue] = useState<CountryCode | undefined>('' as CountryCode)

  function handleCountrySelected(value: string) {
    setValue(value as CountryCode)
  }

  return (
    <Select.Root
      name="country"
      value={value}
      onValueChange={handleCountrySelected}
    >
      <Select.Trigger>
        <Select.Value placeholder="Select your country...">
          {value && (
            <>
              <Flag
                className="h-5 w-5 rounded-full object-cover object-center"
                code={value}
              />
              {countries[value]}
            </>
          )}
        </Select.Value>
      </Select.Trigger>

      <Select.Portal>
        {Object.entries(countries).map(([code, title]) => {
          return (
            <Select.SelectItem key={code} value={code}>
              <Select.ItemPrefix>
                <Flag
                  className="h-5 w-5 rounded-full object-cover object-center"
                  code={code}
                />
              </Select.ItemPrefix>
              <Select.ItemText value={code}>{title}</Select.ItemText>
            </Select.SelectItem>
          )
        })}
      </Select.Portal>
    </Select.Root>
  )
}
