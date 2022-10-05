import { getProjects } from './api/projects'
import { getTechs } from './api/techs'

import { Home } from '@app/components/templates/Home'

import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const projects = JSON.parse(await getProjects())
  const techs = JSON.parse(await getTechs())

  return { props: { projects, techs } }
}

export default Home
