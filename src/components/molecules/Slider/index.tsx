import { useSlider } from './logic'
import { Name, Range, Style, Thumb, Track } from './styles'
import { ISliderProps } from './types'

import { Dot } from './Dot'

export const Slider = ({
  labels,
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
          <>
            {labels && labels[index] && (
              <Name key={index} css={{ ...css, p: 0, size: 'auto' }}>
                {labels[index]}
              </Name>
            )}

            <Dot key={index} css={css} />
          </>
        ))}

        <Range />
      </Track>

      <Thumb css={{ size: thumbSize }} />
    </Style>
  )
}
