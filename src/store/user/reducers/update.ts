import { TReducer } from '@app/types/redux.types'

export const update: TReducer<any, any> = (state, { payload }) => ({
  user: payload
})
