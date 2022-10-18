import { useChangeTheme } from './logic'
import { ColorPicker, Reset, ResetButton, Style } from './styles'

export const ChangeTheme = () => {
  const { showReset, themeState, onResetClick, onColorChange } =
    useChangeTheme()

  return (
    <Style>
      {showReset && (
        <ResetButton
          type='button'
          onClick={onResetClick}
          aria-label='Redefinir cor de fundo'
        >
          <Reset color={themeState.contrastName} />
        </ResetButton>
      )}

      <ColorPicker
        type='color'
        onChange={onColorChange}
        value={themeState.color}
        aria-label='Alterar cor de fundo'
      />
    </Style>
  )
}
