import { useHome } from './logic'
import { Background } from './styles'

import { Header } from './Header'
import { Techs } from './Techs'

import Head from 'next/head'

export const Home = () => {
  const { customTheme, onColorChange, bgGradient } = useHome()

  return (
    <>
      <Head>
        <title>Home</title>

        <link rel='icon' href='/favicon.ico' />

        <meta name='description' content='Generated by create next app' />
      </Head>

      <Header customTheme={customTheme} onColorChange={onColorChange} />

      <Techs />

      <Background css={{ background: bgGradient }}></Background>
    </>
  )
}
