import { Gmail, Style } from './styles'

import { theme } from '@app/styles'

import { Github } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'

import { Tooltip } from '@app/components/molecules/Tooltip'

import { personal } from '@app/services/staticData/personal'

import { remToPxNumber } from '@app/utils/pxAndRem'

export const Social = ({ ...props }) => (
  <Style {...props}>
    <li>
      <Tooltip
        sideOffset={remToPxNumber(theme.sizes['2'].value)}
        content={<span>Copiar e-mail</span>}
        trigger={
          <button
            onClick={() => {
              navigator.clipboard.writeText(personal.email)
            }}
          >
            <Gmail />
          </button>
        }
      />
    </li>

    <li>
      <a
        target='_blank'
        href={`https://wa.me/${personal.phone}`}
        rel='author noreferrer external noopener'
      >
        <Whatsapp />
      </a>
    </li>

    <li>
      <a
        target='_blank'
        href='https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
        rel='author noreferrer external noopener'
      >
        <Linkedin />
      </a>
    </li>

    <li>
      <a
        target='_blank'
        href='https://github.com/InSTinToS'
        rel='author noreferrer external noopener'
      >
        <Github />
      </a>
    </li>
  </Style>
)
