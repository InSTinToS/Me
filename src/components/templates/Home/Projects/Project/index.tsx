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

const Project = ({
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
    urls,
    ulRef,
    showLeftArrow,
    showRightArrow,
    onLeftArrowClick,
    onRightArrowClick
  } = useProject({ files, name })

  return (
    <Style>
      <Header>
        {links?.url && (
          <a
            target='_blank'
            rel='noreferrer'
            href={links.url}
            aria-label={`${name} url`}
          >
            <URL />
          </a>
        )}

        <Title>{name}</Title>

        <Date>
          {date?.start && date.start} {date?.end && `-> ${date.end}`}
        </Date>

        {links?.project && (
          <a
            target='_blank'
            rel='noreferrer'
            href={links.project}
            aria-label={`${name} project`}
          >
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
            {files.map((file, index) =>
              file.isVideo ? (
                <File
                  controls
                  as='video'
                  key={file.alt}
                  src={urls?.[index] || ''}
                />
              ) : (
                <File
                  as='img'
                  key={file.alt}
                  alt={file.alt}
                  src={urls?.[index] || ''}
                />
              )
            )}
          </HorizontalList>

          {files.length !== 1 && (
            <div style={{ display: 'flex' }}>
              <LeftArrow
                type='button'
                disabled={!showLeftArrow}
                onClick={onLeftArrowClick}
                aria-label='Mostrar imagem anterior'
              >
                {showLeftArrow && <Arrow />}
              </LeftArrow>

              <RightArrow
                type='button'
                disabled={!showRightArrow}
                onClick={onRightArrowClick}
                aria-label='Mostrar próxima imagem'
              >
                {showRightArrow && <Arrow />}
              </RightArrow>
            </div>
          )}
        </Footer>
      )}
    </Style>
  )
}

export default Project
