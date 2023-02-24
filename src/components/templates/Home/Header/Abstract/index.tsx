import { EnStyle, Style } from './styles'

import { Link } from '@app/components/atoms/Link'
import { ScreenReaderText } from '@app/components/atoms/ScreenReaderText'

const En = ({ children, ...props }: any) => (
  <EnStyle lang='en' {...props}>
    {children}
  </EnStyle>
)

export const Abstract = () => (
  <Style tabIndex={0}>
    {`Cursando Engenharia da Computação (9º Semestre), estudo desenvolvimento web, mais focado em `}
    <En>Front-end</En>
    {`. Durante a faculdade, fiz o bootcamp Ignite da `}
    <Link target='_blank' href='https://www.rocketseat.com.br/'>
      <En>Rocketseat</En>
    </Link>
    {`, participei de um projeto de iniciação científica durante 3 anos (350 R$ `}
    <ScreenReaderText visibleToScreenReader={false} visibleInScreen>
      {'/ '}
    </ScreenReaderText>
    <ScreenReaderText visibleToScreenReader visibleInScreen={false}>
      por
    </ScreenReaderText>
    {`mês) e criei alguns projetos para praticar meus conhecimentos `}
    <En>Full-stack</En>.
  </Style>
)
