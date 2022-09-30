import { ITechCardProps } from './TechCard/types'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { techs } from '@app/services/staticData/techs'

import { TInputProps } from '@app/types/react.types'

import { useEffect, useState } from 'react'

export const useTechs = () => {
  const themeState = useAppSelector(({ theme }) => theme)

  const [searchValue, setSearchValue] = useState<string>()
  const [techList, setTechList] = useState<ITechCardProps[]>(techs)

  const onSearchChange: TInputProps['onChange'] = e => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    setTechList(
      searchValue
        ? techs.filter(({ name }) =>
            name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : techs
    )
  }, [searchValue])

  return { onSearchChange, techList, themeState }
}
