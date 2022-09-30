import { SliderProps } from '@radix-ui/react-slider'

export interface ISliderProps extends SliderProps {
  max?: number
  min?: number
  thumbSize: number
  stepPadding: number
  stepsQuantity: number
}

export interface IUseSliderParams {
  max: number
  min: number
  thumbSize: ISliderProps['thumbSize']
  stepPadding: ISliderProps['stepPadding']
  stepsQuantity: ISliderProps['stepsQuantity']
}
