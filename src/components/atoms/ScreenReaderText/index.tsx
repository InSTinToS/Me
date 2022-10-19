import { Style } from './styles'
import { IScreenReaderTextProps } from './types'

export const ScreenReaderText = ({
  children,
  visibleInScreen,
  visibleToScreenReader,
  ...props
}: IScreenReaderTextProps) => (
  <Style
    aria-hidden={!visibleToScreenReader}
    visibleInScreen={visibleInScreen}
    {...props}
  >
    {children}
  </Style>
)
