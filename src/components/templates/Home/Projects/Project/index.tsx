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
  Paragraph,
  Paragraphs,
  RightArrow,
  Style,
  Title,
  URL
} from './styles'
import { IProjectProps } from './types'

import { HorizontalList } from '@app/components/molecules/HorizontalList'

export const Project = ({
  name,
  date,
  files,
  links,
  subtitle,
  location,
  paragraphs,
  occupations
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
        {links?.url && (
          <a href={links.url} target='_blank' rel='noreferrer'>
            <URL />
          </a>
        )}

        <Title>{name}</Title>

        <Date>
          {date?.start && date.start} {date?.end && `-> ${date.end}`}
        </Date>

        {links?.project && (
          <a href={links.project} target='_blank' rel='noreferrer'>
            <Github />
          </a>
        )}
      </Header>

      <Paragraphs>
        <Info>
          {occupations?.map((occupation, index) => (
            <InfoItem key={index}>{occupation}</InfoItem>
          ))}

          {subtitle && <InfoItem>{subtitle}</InfoItem>}

          {location && <InfoItem>{location}</InfoItem>}
        </Info>

        {paragraphs?.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </Paragraphs>

      {files && (
        <Footer>
          <HorizontalList ref={ulRef}>
            {files.map(file =>
              file.isVideo ? (
                <File key={file.dir} as='video' src={file.dir} controls />
              ) : (
                <File key={file.dir} as='img' src={file.dir} alt={file.alt} />
              )
            )}
          </HorizontalList>

          <div style={{ display: 'flex' }}>
            <LeftArrow
              type='button'
              disabled={!showLeftArrow}
              onClick={onLeftArrowClick}
            >
              {showLeftArrow && <Arrow />}
            </LeftArrow>

            <RightArrow
              type='button'
              onClick={onRightArrowClick}
              disabled={!showRightArrow}
            >
              {showRightArrow && <Arrow />}
            </RightArrow>
          </div>
        </Footer>
      )}
    </Style>
  )
}
