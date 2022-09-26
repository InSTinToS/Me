import { ICustomThemeState } from '../types'

import { TButtonProps, TInputProps } from '@app/types/react.types'

export interface IHeaderProps {
  customTheme: ICustomThemeState
  onResetClick: TButtonProps['onClick']
  onColorChange: TInputProps['onChange']
}
