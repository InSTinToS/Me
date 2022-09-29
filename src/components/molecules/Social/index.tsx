import { Gmail, Style } from './styles'

import { Github } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'

export const Social = ({ ...props }) => (
  <Style {...props}>
    <li>
      <Gmail />
    </li>

    <li>
      <Whatsapp />
    </li>

    <li>
      <Linkedin />
    </li>

    <li>
      <Github />
    </li>
  </Style>
)
