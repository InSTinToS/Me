import { Image, Name, Progress, Style } from './styles'
import { ITechCardProps } from './types'

import { transition } from '@app/styles/transition'

export const TechCard = ({ name, path, progress }: ITechCardProps) => (
  <Style layoutId={name} transition={transition}>
    {path && <Image src={path} alt={name} />}

    <Name>{name}</Name>

    <Progress progress={progress} />
  </Style>
)
