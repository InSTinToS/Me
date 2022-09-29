import {
  Avatar,
  ColorPicker,
  CustomColor,
  Name,
  Occupation,
  Reset,
  ResetButton,
  Social,
  Style
} from './styles'
import { IHeaderProps } from './types'

import { theme } from '@app/styles'

import { forwardRef } from 'react'

export const Header = forwardRef<any, IHeaderProps>(
  ({ customTheme, onResetClick, onColorChange, ...props }, ref) => (
    <Style ref={ref} {...props}>
      <Social />

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
