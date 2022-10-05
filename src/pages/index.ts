import { Home } from '@app/components/templates/Home'

import { getProjects } from '@app/backend/modules/projects'
import { getTechs } from '@app/backend/modules/techs'
import { GetStaticProps } from 'next'

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects()
  const techs = await getTechs()

  return { props: { projects: JSON.parse(projects), techs: JSON.parse(techs) } }
}
