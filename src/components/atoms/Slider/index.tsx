import { Range, Style, Thumb, Track } from './styles'
import { ISliderProps } from './types'

const getFitSize = ({ thumbSize, stepsQuantity }: any) => {
  const minus = thumbSize / (stepsQuantity - 1)
  const negative = []

  if (stepsQuantity % 2)
    for (let i = 0; i < stepsQuantity / 2; i++) negative.push(i * -minus)
  else
    for (let i = 0; i < stepsQuantity; i++)
      if (i % 2 !== 0) negative.push(i * (-minus / 2))

  const positive = negative
    .filter(v => v !== 0)
    .map(v => v * -1)
    .reverse()

  return positive.concat(negative)
}

export const Slider = ({
  min = 0,
  max = 100,
  stepsQuantity,
  ...props
}: ISliderProps) => {
  const circles = []
  const thumbSize = 10
  const stepSize = (max - min) / (stepsQuantity - 1)

  const fitSize = getFitSize({ thumbSize, stepsQuantity })

  for (let i = 0; i < stepsQuantity; i++) {
    circles.push(
      <div
        key={i}
        style={{
          left: `calc(${stepSize * i}% + ${fitSize[i]}px)`,

          width: thumbSize,
          height: thumbSize,
          transform: 'translate(-50%, -50%)'
        }}
      />
    )
  }

  return (
    <Style step={stepSize} {...props}>
      <div
        style={{
          border: 'border aqua 1px',
          zIndex: 4,
          position: 'absolute',
          left: '50%',
          width: '2px',
          height: '2px',
          backgroundColor: 'green',

          transform: 'translateX(-50%)'
        }}
      ></div>
      <Track>
        {circles.map(circle => circle)}

        <Range />
      </Track>

      <Thumb css={{ size: thumbSize }} />
    </Style>
  )
}
