import { Image, Name, Progress, Style } from './styles'
import { ITechCardProps } from './types'

import { transition } from '@app/styles/transition'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { memo } from 'react'

const TechCardComponent = ({ name, path, progress }: ITechCardProps) => {
  const themeState = useAppSelector(({ theme }) => theme)

  const percentage = {
    low: '25%',
    medium: '50%',
    high: '100%'
  }

  return (
    <Style
      layoutId={name}
      transition={transition}
      style={{ backgroundColor: themeState.color }}
    >
      {path && <Image src={path} alt={name} />}

      <Name lang='en' style={{ color: themeState.contrast }}>{name}</Name>

      <Progress progress={progress} aria-label={`${percentage[progress]}`} />
    </Style>
  )
}

export const TechCard = memo(TechCardComponent)
