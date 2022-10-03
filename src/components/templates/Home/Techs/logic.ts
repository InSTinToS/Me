import { IUseTechsParams } from './types'

import { ITechCardProps } from './TechCard/types'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { techs } from '@app/services/staticData/techs'

import { TInputProps } from '@app/types/react.types'

import { MotionProps, useInView } from 'framer-motion'
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

export const useTechs = ({ ref }: IUseTechsParams) => {
  const isInView = useInView(ref, { once: true })
  const themeState = useAppSelector(({ theme }) => theme)
  const [searchValue, setSearchValue] = useState<string>()
  const [techList, setTechList] = useState<ITechCardProps[]>(
    onSearchValueChange(searchValue)
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
    const newValue = onSearchValueChange(searchValue)

    setTechList(newValue)
  }, [searchValue])

  return { onSearchChange, techList, themeState, techsAnimations }
}
