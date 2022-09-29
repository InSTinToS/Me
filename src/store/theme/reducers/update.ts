import { IThemeStore } from '../types'

import { theme } from '@app/styles'

import { TReducer } from '@app/types/redux.types'

import { blackOrWhiteByContrast } from '@app/utils/colors'

export const update: TReducer<IThemeStore, string> = (_state, { payload }) => ({
  color: payload,
  contrast: blackOrWhiteByContrast(payload),
  contrastName:
    blackOrWhiteByContrast(payload) === theme.colors.white.value
      ? 'white'
      : 'black'
})
