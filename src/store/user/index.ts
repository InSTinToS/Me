import { update } from './reducers/update'

import { IUser } from '@app/types/api/user.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: { user?: IUser } = { user: undefined }

export const userStore = createSlice({
  initialState,
  name: 'user-store',
  reducers: { update }
})
