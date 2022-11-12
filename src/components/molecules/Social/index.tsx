/* eslint-disable @next/next/no-img-element */
import { useSocial } from './logic'
import { Style } from './styles'
import { ISocialProps } from './types'

import { Link } from '@app/components/atoms/Link'

import { Tooltip } from '@app/components/utilities/Tooltip'

export const Social = ({ children, ...props }: ISocialProps) => {
  const { gmail, resume, personal, printResume, onGoogleClick } = useSocial()

  return (
    <Style {...props}>
      {resume && (
        <li>
          <Tooltip
            content='Acessar currículo colorido'
            trigger={
              <Link href={resume} aria-label='Currículo colorido'>
                <img src='/icons/coloredPDF.svg' alt='PDF Colorido' />
              </Link>
            }
          />
        </li>
      )}

      {printResume && (
        <li>
          <Tooltip
            content='Acessar currículo em preto e branco'
            trigger={
              <Link href={printResume} aria-label='Currículo para imprimir'>
                <img src='/icons/blackPDF.svg' alt='PDF preto e branco' />
              </Link>
            }
          />
        </li>
      )}

      <li>
        <Tooltip
          open={gmail.open}
          content={gmail.text}
          variant={gmail.variant}
          onTriggerClick={onGoogleClick}
          trigger={<img src='/icons/google.svg' alt='Google' lang='en' />}
        />
      </li>

      <li>
        <Tooltip
          content='Whatsapp'
          trigger={
            <Link
              lang='en'
              aria-label='Whatsapp'
              href={`https://wa.me/${personal.phone}`}
            >
              <img src='/icons/whatsapp.svg' alt='Whatsapp' lang='en' />
            </Link>
          }
        />
      </li>

      <li>
        <Link
          lang='en'
          aria-label='Linkedin'
          href='https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
        >
          <img src='/icons/linkedin.svg' alt='Linkedin' lang='en' />
        </Link>
      </li>

      <li>
        <Link lang='en' aria-label='Github' href='https://github.com/InSTinToS'>
          <img src='/icons/github.svg' alt='Github' lang='en' />
        </Link>
      </li>

      {children}
    </Style>
  )
}
