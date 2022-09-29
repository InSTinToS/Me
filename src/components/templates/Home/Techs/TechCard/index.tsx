import { Image, Name, Progress, Style } from './styles'
import { ITechCardProps } from './types'

import { transition } from '@app/styles/transition'

import { useAppSelector } from '@app/hooks/useAppSelector'

export const TechCard = ({ name, path, progress }: ITechCardProps) => {
  const themeState = useAppSelector(({ theme }) => theme)

  return (
    <Style
      layoutId={name}
      transition={transition}
      color={themeState.contrastName}
    >
      {path && <Image src={path} alt={name} />}

      <Name>{name}</Name>

      <Progress progress={progress} />
    </Style>
  )
}
