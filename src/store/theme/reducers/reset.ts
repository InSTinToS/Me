import { IThemeStore } from '../types'

import { TReducer } from '@app/types/redux.types'

import { initialState } from '..'

export const reset: TReducer<IThemeStore, undefined> = _state => initialState
