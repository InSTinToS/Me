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
  ...props
}: ISliderProps) => {
  const { stepSize, dotsCSS } = useSlider({
    max,
    min,
    thumbSize,
    stepPadding,
    stepsQuantity
  })

  return (
    <Style step={stepSize} {...props}>
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
