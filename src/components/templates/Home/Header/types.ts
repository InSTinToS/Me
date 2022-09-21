import { ICustomThemeState } from '../types'

import { TButtonProps, TInputProps } from '@app/types/react.types'

export interface IHeaderProps {
  customTheme: ICustomThemeState
  onColorChange: TInputProps['onChange']
  onResetClick: TButtonProps['onClick']
}
