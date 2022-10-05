import { IProject } from '@app/types/api/project.types'

export interface IProjectsProps {
  projects?: IProject[]
}

export interface IUseProjectsParams {
  ref: any
}
