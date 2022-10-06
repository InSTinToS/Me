import { IProject } from '@app/types/api/project.types'

import { MongoClient } from 'mongodb'

export const getProjects = async (dbConnection: MongoClient) => {
  const projects = await dbConnection
    .db()
    .collection<IProject>('Projects')
    .find()
    .toArray()

  return JSON.stringify(projects)
}
