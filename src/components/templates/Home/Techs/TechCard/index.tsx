/* eslint-disable @next/next/no-img-element */
import { Image, Name, Progress, Style } from './styles'
import { ITechCardProps } from './types'

export const TechCard = ({ name, path, progress }: ITechCardProps) => (
  <Style>
    <Image src={path} alt={name} />

    <Name>{name}</Name>

    <Progress progress={progress} />
  </Style>
)
