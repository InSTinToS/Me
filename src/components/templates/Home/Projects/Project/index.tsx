import { useProject } from './logic'
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

import { theme } from '@app/styles'

import { HorizontalList } from '@app/components/molecules/HorizontalList'

import { remToPxNumber } from '@app/utils/pxAndRem'

export const Project = ({
  name,
  date,
  files,
  subtitle,
  location,
  occupations,
  paragraphs
}: IProjectProps) => {
  const {
    ulRef,
    showLeftArrow,
    showRightArrow,
    onLeftArrowClick,
    onRightArrowClick
  } = useProject()

  return (
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
        <HorizontalList ref={ulRef} gap={remToPxNumber(theme.sizes[10].value)}>
          {files.map(file =>
            file.isVideo ? (
              <File key={file.dir} as='video' src={file.dir} controls />
            ) : (
              <File key={file.dir} as='img' src={file.dir} alt={file.alt} />
            )
          )}
        </HorizontalList>

        {showLeftArrow && (
          <LeftArrow type='button' onClick={onLeftArrowClick}>
            <Arrow />
          </LeftArrow>
        )}

        {showRightArrow && (
          <RightArrow type='button' onClick={onRightArrowClick}>
            <Arrow />
          </RightArrow>
        )}
      </Footer>
    </Style>
  )
}
