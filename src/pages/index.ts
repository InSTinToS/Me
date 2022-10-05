import { getProjects } from './api/projects'

import { Home } from '@app/components/templates/Home'

import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects()

  return { props: { projects: JSON.parse(projects) } }
}

export default Home
