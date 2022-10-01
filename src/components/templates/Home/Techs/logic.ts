import { ITechCardProps } from './TechCard/types'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { techs } from '@app/services/staticData/techs'

import { TInputProps } from '@app/types/react.types'

import { useEffect, useState } from 'react'

const onSearchValueChange = (searchedValue?: string) => {
  if (!searchedValue) {
    const techsByProgress = [
      techs.filter(tech => tech.progress === 'high'),
      techs.filter(tech => tech.progress === 'medium'),
      techs.filter(tech => tech.progress === 'low')
    ].flat()

    return techsByProgress
  }

  return techs.filter(({ name }) =>
    name.toLowerCase().includes(searchedValue.toLowerCase())
  )
}

export const useTechs = () => {
  const themeState = useAppSelector(({ theme }) => theme)

  const [searchValue, setSearchValue] = useState<string>()
  const [techList, setTechList] = useState<ITechCardProps[]>(
    onSearchValueChange(searchValue)
  )

  const onSearchChange: TInputProps['onChange'] = e => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const newValue = onSearchValueChange(searchValue)

    setTechList(newValue)
  }, [searchValue])

  return { onSearchChange, techList, themeState }
}
