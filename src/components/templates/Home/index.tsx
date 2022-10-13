import { useHome } from './logic'
import { Background } from './styles'
import { IHomeProps } from './types'

import { Header } from './Header'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { Techs } from './Techs'

import { SmartFixedNav } from '@app/components/utilities/SmartFixedNav'

import { personal } from '@app/static/personal'

import Head from 'next/head'

export const Home = ({ projects, techs }: IHomeProps) => {
  const { techsRef, navItems, bgGradient, projectsRef } = useHome()

  return (
    <>
      <Head>
        <link rel='canonical' href={personal.url} />

        <title>Miguel Andrade Barreto | Desenvolvedor Web</title>
      </Head>

      <SmartFixedNav
        aboveContent={<Header />}
        nav={<Navbar items={navItems} />}
      />

      <Techs ref={techsRef} techs={techs} />

      <Projects ref={projectsRef as any} projects={projects} />

      <Background css={{ background: bgGradient }} />
    </>
  )
}
