import { useAppDispatch } from '@app/hooks/useAppDispatch'
import { useAppSelector } from '@app/hooks/useAppSelector'

import { initialState, themeStore } from '@app/store/theme'

import { TButtonProps, TInputProps } from '@app/types/react.types'

export const useChangeTheme = () => {
  const dispatch = useAppDispatch()
  const themeState = useAppSelector(({ theme }) => theme)

  const showReset = themeState !== initialState

  const onColorChange: TInputProps['onChange'] = e => {
    const newColor = e.currentTarget.value

    dispatch(themeStore.actions.update(newColor))
  }

  const onResetClick: TButtonProps['onClick'] = () => {
    dispatch(themeStore.actions.reset())
  }

  return { onColorChange, onResetClick, showReset, themeState }
}
