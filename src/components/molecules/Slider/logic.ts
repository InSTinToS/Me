import { IUseSliderParams } from './types'

import { CSS } from '@stitches/react'

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

export const useSlider = ({
  max,
  min,
  thumbSize,
  stepPadding,
  onSliderChange,
  stepsQuantity
}: IUseSliderParams) => {
  const dotsCSS: CSS[] = []
  const stepSize = (max - min) / (stepsQuantity - 1)

  const fitSize = getFitSize({ thumbSize, stepsQuantity })

  for (let i = 0; i < stepsQuantity; i++)
    dotsCSS.push({
      p: stepPadding,
      size: thumbSize,
      left: `calc(${stepSize * i}% + ${fitSize[i]}px)`
    })

  const onValueChange = (value: number[]) => {
    onSliderChange &&
      onSliderChange({ value: value, index: value[0] / stepSize })
  }

  return { getFitSize, stepSize, dotsCSS, thumbSize, onValueChange }
}
