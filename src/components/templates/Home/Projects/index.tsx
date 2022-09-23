/* eslint-disable @next/next/no-img-element */
import { useProjects } from './logic'
import { Header, Style } from './styles'

import { Arrow } from '@app/components/atoms/Icon/icons/Arrow'
import { Slider } from '@app/components/atoms/Slider'

export const Projects = () => {
  const { projects, onProjectChange, project } = useProjects()

  return (
    <Style>
      <Header>
        <Slider
          min={0}
          max={100}
          step={10}
          name='project'
          value={project}
          onValueChange={onProjectChange}
        />
      </Header>

      {projects.map(
        ({ files, name, paragraphs, date, location, occupation, subtitle }) => (
          <article key={name}>
            <header>
              <h3>{name}</h3>

              <p>
                {occupation && occupation + '\n'}
                {subtitle && subtitle + '\n'}
                {location && location + '\n'}
                {date?.start && date.start} {date?.end && `-> ${date.end}`}
              </p>
            </header>

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <footer>
              <button type='button'>
                <Arrow />
              </button>

              <ul>
                {files.map(file => (
                  <li key={file.dir}>
                    {file.isVideo ? (
                      <video src={file.dir} />
                    ) : (
                      <img src={file.dir} alt={file.alt} />
                    )}
                  </li>
                ))}
              </ul>

              <button type='button'>
                <Arrow />
              </button>
            </footer>
          </article>
        )
      )}
    </Style>
  )
}
