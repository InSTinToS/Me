import { useSlider } from './logic'
import { Range, Style, Thumb, Track } from './styles'
import { ISliderProps } from './types'

import { Dot } from './Dot'

export const Slider = ({
  min = 0,
  max = 100,
  thumbSize,
  stepPadding,
  stepsQuantity,
  onSliderChange,
  ...props
}: ISliderProps) => {
  const { stepSize, dotsCSS, onValueChange } = useSlider({
    max,
    min,
    thumbSize,
    stepPadding,
    stepsQuantity,
    onSliderChange
  })

  return (
    <Style step={stepSize} onValueChange={onValueChange} {...props}>
      <Track>
        {dotsCSS.map((css, index) => (
          <Dot key={index} css={css} />
        ))}

        <Range />
      </Track>

      <Thumb css={{ size: thumbSize }} />
    </Style>
  )
}
