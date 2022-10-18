import { Style } from './styles'
import { IScreenReaderTextProps } from './types'

export const ScreenReaderText = ({
  children,
  visibleInScreen,
  visibleToScreenReader
}: IScreenReaderTextProps) => (
  <Style aria-hidden={!visibleToScreenReader} visibleInScreen={visibleInScreen}>
    {children}
  </Style>
)
