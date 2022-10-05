import { ITech } from '@app/types/api/tech.types'

export interface ITechsProps {
  techs?: ITech[]
}

export interface IUseTechsParams {
  ref: any
  techs?: ITech[]
}
