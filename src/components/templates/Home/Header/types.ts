import { ICustomThemeState } from '../types'

import { TInputProps } from '@app/types/react.types'

export interface IHeaderProps {
  customTheme: ICustomThemeState
  onColorChange: TInputProps['onChange']
}
