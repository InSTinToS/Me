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

import { ScreenReaderText } from '@app/components/atoms/ScreenReaderText'

import { HorizontalList } from '@app/components/utilities/HorizontalList'

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
    accessibleDate,
    onLeftArrowClick,
    onRightArrowClick
  } = useProject({ files, name, date })

  return (
    <Style>
      <Header>
        {links?.url && (
          <a
            tabIndex={0}
            target='_blank'
            rel='noreferrer'
            href={links.url}
            aria-label={`visitar ${name}`}
          >
            <URL />
          </a>
        )}

        <Title tabIndex={0} lang='en'>
          {name}
        </Title>

        <Date tabIndex={0}>
          <ScreenReaderText
            visibleToScreenReader
            visibleInScreen={false}
            css={{ display: 'block' }}
          >
            {accessibleDate}
          </ScreenReaderText>

          <ScreenReaderText visibleInScreen visibleToScreenReader={false}>
            {date?.start && date.start}
          </ScreenReaderText>

          <ScreenReaderText visibleInScreen visibleToScreenReader={false}>
            {date?.end && ` -> ${date.end}`}
          </ScreenReaderText>
        </Date>

        {links?.project && (
          <a
            tabIndex={0}
            target='_blank'
            rel='noreferrer'
            href={links.project}
            lang='en'
            aria-label={`${name} Github`}
          >
            <Github />
          </a>
        )}
      </Header>

      <Paragraphs>
        <Info tabIndex={0}>
          {occupations?.map((occupation, index) => (
            <InfoItem key={index}>{occupation}</InfoItem>
          ))}

          {subtitle && <InfoItem>{subtitle}</InfoItem>}

          {location && <InfoItem>{location}</InfoItem>}
        </Info>

        {paragraphs?.map((paragraph, index) => (
          <Paragraph tabIndex={0} key={index}>
            {paragraph}
          </Paragraph>
        ))}
      </Paragraphs>

      {files && (
        <Footer>
          <HorizontalList ref={ulRef} aria-live='polite'>
            {files.map((file, index) =>
              file.isVideo ? (
                <File
                  controls
                  as='video'
                  key={file.alt}
                  aria-label='Vídeo'
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
