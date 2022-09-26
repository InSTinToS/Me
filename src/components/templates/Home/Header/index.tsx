import {
  Avatar,
  ColorPicker,
  CustomColor,
  Gmail,
  Name,
  Occupation,
  Reset,
  ResetButton,
  Social,
  Style
} from './styles'
import { IHeaderProps } from './types'

import { theme } from '@app/styles'

import { Github } from '@app/components/atoms/Icon/icons/Github'
import { Linkedin } from '@app/components/atoms/Icon/icons/Linkedin'
import { Whatsapp } from '@app/components/atoms/Icon/icons/Whatsapp'

import { forwardRef } from 'react'

export const Header = forwardRef<any, IHeaderProps>(
  ({ customTheme, onResetClick, onColorChange, ...props }, ref) => (
    <Style ref={ref} {...props}>
      <Social>
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
      </Social>

      <CustomColor>
        {customTheme.color !== theme.colors.primary.value && (
          <ResetButton type='button' onClick={onResetClick}>
            <Reset
              color={customTheme.color === '#ffffff' ? 'white' : 'black'}
            />
          </ResetButton>
        )}

        <ColorPicker
          type='color'
          onChange={onColorChange}
          value={customTheme.color}
        />
      </CustomColor>

      <Avatar />

      <Name>Miguel Andrade Barreto</Name>

      <Occupation>Desenvolvedor Web</Occupation>
    </Style>
  )
)

Header.displayName = 'Header'
