import { SliderProps } from '@radix-ui/react-slider'

export interface ISliderProps extends SliderProps {
  max?: number
  min?: number
  labels?: string[]
  thumbSize: number
  ariaLabel?: string
  ariaValue?: string
  stepPadding: number
  stepsQuantity: number
  onSliderChange: (values: { value: number[]; index: number }) => void
}

export interface IUseSliderParams {
  max: number
  min: number
  value: ISliderProps['value']
  labels: ISliderProps['labels']
  thumbSize: ISliderProps['thumbSize']
  stepPadding: ISliderProps['stepPadding']
  stepsQuantity: ISliderProps['stepsQuantity']
  onSliderChange: ISliderProps['onSliderChange']
}

export type TGetFitSize = (params: {
  thumbSize: IUseSliderParams['thumbSize']
  stepsQuantity: IUseSliderParams['stepsQuantity']
}) => number[]
