import { useSlider } from './logic'
import { Name, Range, Style, Thumb, Track } from './styles'
import { ISliderProps } from './types'

import { Dot } from './Dot'

export const Slider = ({
  value,
  labels,
  min = 0,
  max = 100,
  thumbSize,
  ariaLabel,
  stepPadding,
  stepsQuantity,
  onSliderChange,
  ...props
}: ISliderProps) => {
  const { stepSize, dotsCSS, onValueChange, ariaValue } = useSlider({
    max,
    min,
    value,
    labels,
    thumbSize,
    stepPadding,
    stepsQuantity,
    onSliderChange
  })

  return (
    <Style step={stepSize} onValueChange={onValueChange} {...props}>
      <Track>
        {dotsCSS.map((css, index) => {
          const label = labels && labels[index]

          return (
            <div key={index}>
              {label && (
                <Name css={{ ...css, p: 0, size: 'auto' }}>{label}</Name>
              )}

              <Dot css={css} />
            </div>
          )
        })}

        <Range />
      </Track>

      <Thumb
        aria-label={ariaLabel}
        css={{ size: thumbSize }}
        aria-valuetext={ariaValue}
      />
    </Style>
  )
}
