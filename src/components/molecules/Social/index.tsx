import { Gmail, Style } from './styles'

import { theme } from '@app/styles'

import { ColoredPDF } from '@app/components/atoms/Icon/icons/ColoredPDF'
import { Github } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'

import { Tooltip } from '@app/components/molecules/Tooltip'

import { remToPxNumber } from '@app/utils/pxAndRem'

import { personal } from '@app/static/personal'
import axios from 'axios'
import { useQuery } from 'react-query'

export const Social = ({ ...props }) => {
  const { data } = useQuery(
    `resume`,
    async () => {
      const res = await axios.post('/api/url', {
        paths: [personal.resume]
      })

      return res.data
    },
    {
      refetchOnMount: false,
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }
  )

  return (
    <Style {...props}>
      {data?.urls[0] && (
        <li>
          <a
            target='_blank'
            rel='noreferrer'
            href={data.urls[0]}
            aria-label='resume'
          >
            <ColoredPDF />
          </a>
        </li>
      )}

      <li>
        <Tooltip
          sideOffset={remToPxNumber(theme.sizes['2'].value)}
          content={<span>Copiar e-mail</span>}
          trigger={<Gmail title='gmail' />}
          onTriggerClick={() => {
            navigator.clipboard.writeText(personal.email)
          }}
        />
      </li>

      <li>
        <a
          target='_blank'
          aria-label='Whatsapp'
          href={`https://wa.me/${personal.phone}`}
          rel='author noreferrer external noopener'
        >
          <Whatsapp title='Whatsapp' />
        </a>
      </li>

      <li>
        <a
          target='_blank'
          aria-label='Linkedin'
          href='https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
          rel='author noreferrer external noopener'
        >
          <Linkedin title='linkedin' />
        </a>
      </li>

      <li>
        <a
          target='_blank'
          aria-label='Github'
          href='https://github.com/InSTinToS'
          rel='author noreferrer external noopener'
        >
          <Github title='github' />
        </a>
      </li>
    </Style>
  )
}
