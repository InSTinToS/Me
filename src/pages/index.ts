import { Home } from '@app/components/templates/Home'

import { getProjects } from '@app/backend/modules/projects'
import { getTechs } from '@app/backend/modules/techs'
import { getDBConnection } from '@app/backend/shared/database'
import { GetStaticProps } from 'next'

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const dbConnection = await getDBConnection()

  const techs = await getTechs(dbConnection)
  const projects = await getProjects(dbConnection)

  return { props: { techs: JSON.parse(techs), projects: JSON.parse(projects) } }
}
