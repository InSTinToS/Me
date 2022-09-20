import { store } from '@app/store'

import {
  ActionReducerMapBuilder,
  AsyncThunkPayloadCreator,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'

export type TReducer<SliceState, Payload = SliceState> = CaseReducer<
  SliceState,
  PayloadAction<Payload>
>

export type TExtraReducers<State> = (
  _builder: ActionReducerMapBuilder<State>
) => void

export type TStoreState = ReturnType<typeof store.getState>

export type TStoreDispatch = typeof store.dispatch

export type TPayloadCreator<Return, Params> = AsyncThunkPayloadCreator<
  Return,
  Params,
  { state: TStoreState; dispatch: TStoreDispatch }
>
