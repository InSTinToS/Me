import { userStore } from './user'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { usersStore: userStore.reducer }
})
