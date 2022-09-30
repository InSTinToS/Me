import { themeStore } from './theme'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { theme: themeStore.reducer }
})
