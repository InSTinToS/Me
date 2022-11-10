import { useSocial } from './logic'
import { BlackPDF, ColoredPDF, Gmail, Style } from './styles'

import { Github } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'
import { Link } from '@app/components/atoms/Link'

import { Tooltip } from '@app/components/utilities/Tooltip'

export const Social = ({ ...props }) => {
  const { resume, personal, onGoogleClick, printResume, gmail } = useSocial()

  return (
    <Style {...props}>
      {resume && (
        <li>
          <Tooltip
            content='Acessar currículo colorido'
            trigger={
              <Link href={resume} aria-label='Currículo colorido'>
                <ColoredPDF />
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
                <BlackPDF />
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
          trigger={<Gmail lang='en' title='Gmail' />}
        />
      </li>

      <li>
        <Link
          lang='en'
          aria-label='Whatsapp'
          href={`https://wa.me/${personal.phone}`}
        >
          <Whatsapp title='Whatsapp' />
        </Link>
      </li>

      <li>
        <Link
          lang='en'
          aria-label='Linkedin'
          href='https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
        >
          <Linkedin title='linkedin' />
        </Link>
      </li>

      <li>
        <Link lang='en' aria-label='Github' href='https://github.com/InSTinToS'>
          <Github title='github' />
        </Link>
      </li>
    </Style>
  )
}
