import { useSocial } from './logic'
import { Gmail, Style } from './styles'

import { theme } from '@app/styles'

import { ColoredPDF } from '@app/components/atoms/Icon/icons/ColoredPDF'
import { Github } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'
import { Link } from '@app/components/atoms/Link'

import { Tooltip } from '@app/components/utilities/Tooltip'

import { remToPxNumber } from '@app/utils/pxAndRem'

export const Social = ({ ...props }) => {
  const { resume, personal, onTooltipClick } = useSocial()

  return (
    <Style {...props}>
      {resume && (
        <li>
          <Link href={resume} aria-label='Currículo'>
            <ColoredPDF />
          </Link>
        </li>
      )}

      <li>
        <Tooltip
          onTriggerClick={onTooltipClick}
          trigger={<Gmail title='gmail' />}
          content={<span>Copiar e-mail</span>}
          sideOffset={remToPxNumber(theme.sizes['2'].value)}
        />
      </li>

      <li>
        <Link aria-label='Whatsapp' href={`https://wa.me/${personal.phone}`}>
          <Whatsapp title='Whatsapp' />
        </Link>
      </li>

      <li>
        <Link
          aria-label='Linkedin'
          href='https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
        >
          <Linkedin title='linkedin' />
        </Link>
      </li>

      <li>
        <Link aria-label='Github' href='https://github.com/InSTinToS'>
          <Github title='github' />
        </Link>
      </li>
    </Style>
  )
}
