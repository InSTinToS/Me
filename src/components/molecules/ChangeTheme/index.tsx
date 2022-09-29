import { useChangeTheme } from './logic'
import { ColorPicker, Reset, ResetButton, Style } from './styles'

export const ChangeTheme = () => {
  const { showReset, themeState, onResetClick, onColorChange } =
    useChangeTheme()

  return (
    <Style>
      {showReset && (
        <ResetButton type='button' onClick={onResetClick}>
          <Reset color={themeState.contrastName} />
        </ResetButton>
      )}

      <ColorPicker
        type='color'
        onChange={onColorChange}
        value={themeState.color}
      />
    </Style>
  )
}
