import { IUseTechsParams } from './types'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { ITech } from '@app/types/api/tech.types'
import { TInputProps } from '@app/types/react.types'

import { MotionProps, useInView } from 'framer-motion'
import { useEffect, useState } from 'react'

const orderByProgress = (techs: ITech[]) =>
  [
    techs.filter(tech => tech.progress === 'high'),
    techs.filter(tech => tech.progress === 'medium'),
    techs.filter(tech => tech.progress === 'low')
  ].flat()

const onSearchValueChange = (searchedValue?: string, techs?: ITech[]) => {
  if (!techs) return undefined

  if (!searchedValue) return orderByProgress(techs)

  const filteredByValue = techs?.filter(({ name }) =>
    name.toLowerCase().includes(searchedValue.toLowerCase())
  )

  return orderByProgress(filteredByValue)
}

export const useTechs = ({ ref, techs }: IUseTechsParams) => {
  const isInView = useInView(ref, { once: true })
  const themeState = useAppSelector(({ theme }) => theme)
  const [searchValue, setSearchValue] = useState<string>()
  const [techList, setTechList] = useState<ITech[] | undefined>(
    onSearchValueChange(searchValue, techs)
  )

  const techsAnimations: MotionProps = {
    transition: { type: 'spring' },
    initial: { opacity: 0, y: 100 },
    animate: { y: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }
  }

  const onSearchChange: TInputProps['onChange'] = e => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const newValue = onSearchValueChange(searchValue, techs)

    setTechList(newValue)
  }, [searchValue, techs])

  return { onSearchChange, techList, themeState, techsAnimations }
}
