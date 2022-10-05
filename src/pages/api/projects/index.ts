import { projects as staticProjects } from '@app/services/staticData/projects'

import { getObjectSignedUrl } from '@app/server/s3'

export const getProjects = async () => {
  for (const project of staticProjects) {
    if (project.files)
      for (const file of project.files)
        file.dir = await getObjectSignedUrl(file.dir)
  }

  return JSON.stringify(staticProjects)
}
