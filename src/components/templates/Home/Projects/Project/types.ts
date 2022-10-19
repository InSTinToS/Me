import { IProject } from '@app/types/api/project.types'

export interface IProjectProps extends IProject {}

export interface IUseProjectParams {
  files: IProject['files']
  name: IProject['name']
  date: IProject['date']
}
