import { useHome } from './logic'
import { Background } from './styles'
import { IHomeProps } from './types'

import { Header } from './Header'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { Techs } from './Techs'

import { SmartFixedNav } from '@app/components/utilities/SmartFixedNav'
import Head from 'next/head'

export const Home = ({ projects, techs }: IHomeProps) => {
  const { techsRef, navItems, bgGradient, projectsAnimations, projectsRef } =
    useHome()

  return (
    <>
      <Head>
        <title>Miguel Andrade Barreto | Desenvolvedor Web</title>
      </Head>

      <SmartFixedNav
        aboveContent={<Header />}
        nav={<Navbar items={navItems} />}
      />

      <Techs ref={techsRef} techs={techs} />

      <Projects ref={projectsRef} projects={projects} {...projectsAnimations} />

      <Background css={{ background: bgGradient }} />
    </>
  )
}
