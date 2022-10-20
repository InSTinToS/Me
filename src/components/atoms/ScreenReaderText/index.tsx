import { Style } from './styles'
import { IScreenReaderTextProps } from './types'

export const ScreenReaderText = ({
  css,
  children,
  visibleInScreen,
  visibleToScreenReader,
  ...props
}: IScreenReaderTextProps) => (
  <Style
    css={css}
    visibleInScreen={visibleInScreen}
    aria-hidden={!visibleToScreenReader}
    {...props}
  >
    {children}
  </Style>
)
