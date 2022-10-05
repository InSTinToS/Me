import { getObjectSignedUrl } from '../shared/aws/s3'
import { getDBConnection } from '../shared/database'

import { IProject } from '@app/types/api/project.types'

export const getProjects = async () => {
  const dbConnection = await getDBConnection()

  const projects = await dbConnection
    .db()
    .collection<IProject>('Projects')
    .find()
    .toArray()

  for (const project of projects) {
    if (project.files)
      for (const file of project.files)
        if (file.src) file.src = await getObjectSignedUrl(file.src)
  }

  return JSON.stringify(projects)
}
