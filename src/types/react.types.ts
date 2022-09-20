import {
  ButtonHTMLAttributes,
  Dispatch,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction
} from 'react'

export interface IChildrenProps {
  children: ReactNode
}

export type TSetState<State> = Dispatch<SetStateAction<State>>
export type TFormProps = FormHTMLAttributes<HTMLFormElement>
export type TInputProps = InputHTMLAttributes<HTMLInputElement>
export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type TTimer = string | number | NodeJS.Timeout | undefined
