import { IUseIconParams } from './types'

export const useIcon = ({ labelledBy }: IUseIconParams) => {
  const descId = labelledBy ? `${labelledBy}Desc` : undefined
  const titleId = labelledBy ? `${labelledBy}Title` : undefined
  const ariaLabelledBy = descId && titleId ? `${titleId} ${descId}` : undefined

  return { descId, titleId, ariaLabelledBy }
}
