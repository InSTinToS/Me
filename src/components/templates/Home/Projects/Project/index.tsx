import {
  Arrow,
  Date,
  File,
  Footer,
  Github,
  Header,
  Info,
  InfoItem,
  LeftArrow,
  Linkedin,
  Paragraph,
  RightArrow,
  Style,
  Title
} from './styles'
import { IProjectProps } from './types'

export const Project = ({
  name,
  date,
  files,
  subtitle,
  location,
  occupations,
  paragraphs
}: IProjectProps) => (
  <Style>
    <Header>
      <Linkedin />

      <Title>{name}</Title>

      <Date>
        {date?.start && date.start} {date?.end && `-> ${date.end}`}
      </Date>

      <Github />
    </Header>

    <Info>
      {occupations?.map((occupation, index) => (
        <InfoItem key={index}>{occupation}</InfoItem>
      ))}

      <InfoItem>{subtitle}</InfoItem>
      <InfoItem>{location}</InfoItem>
    </Info>

    {paragraphs?.map((paragraph, index) => (
      <Paragraph key={index}>{paragraph}</Paragraph>
    ))}

    <Footer>
      <ul>
        <li key={files[0].dir}>
          {files[0].isVideo ? (
            <File as='video' src={files[0].dir} />
          ) : (
            <File as='img' src={files[0].dir} alt={files[0].alt} />
          )}
        </li>
      </ul>

      <LeftArrow type='button'>
        <Arrow />
      </LeftArrow>

      <RightArrow type='button'>
        <Arrow />
      </RightArrow>
    </Footer>
  </Style>
)
