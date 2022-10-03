import { useHome } from './logic'
import { Background } from './styles'

import { Header } from './Header'
import { Navbar } from './Navbar'
import { Projects } from './Projects'
import { Techs } from './Techs'

import { SmartFixedNav } from '@app/components/utilities/SmartFixedNav'
import Head from 'next/head'

export const Home = () => {
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

      <Techs ref={techsRef} />

      <Projects ref={projectsRef} {...projectsAnimations} />

      <Background css={{ background: bgGradient }} />
    </>
  )
}
