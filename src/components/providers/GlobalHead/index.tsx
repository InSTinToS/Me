/* eslint-disable @next/next/no-page-custom-font */
import { personal } from '@app/static/personal'

export const Fonts = () => (
  <>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      crossOrigin='true'
      href='https://fonts.gstatic.com'
    />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
    />
  </>
)

export const TwitterOG = () => (
  <>
    <meta name='twitter:url'      content={personal.url} />
    <meta name='twitter:domain'   content={personal.domain} />
    <meta name='twitter:site'     content={personal.twitter} />
    <meta name='twitter:creator'  content={personal.twitter} />
    <meta name='twitter:card'     content='summary_large_image' />

    <meta
      name='twitter:image'
      content={`${process.env.BUCKET_URL}/personal/avatar.png`}
    />

    <meta
      name='twitter:title'
      content='Miguel Andrade Barreto | Desenvolvedor Web'
    />

    <meta
      name='twitter:description'
      content='Miguel A. Barreto, desenvolvedor web junior, focado em front-end com React, Next e Typescript'
    />
  </>
)


export const FacebookOG = () => (
  <>
    <meta name='application-name' content='Me' />
    <meta name='og:type'          content='website' />
    <meta name='og:url'           content={personal.url} />
    <meta name='og:email'         content={personal.email} />
    <meta name='og:phone_number'  content={personal.phone} />
    <meta name='og:image'         content={`${process.env.BUCKET_URL}/personal/avatar.png`} />
    
    <meta
      name='og:title'
      content='Miguel Andrade Barreto | Desenvolvedor Web'
    />
    <meta
      name='og:description'
      content='Miguel A. Barreto, desenvolvedor web junior, focado em front-end com React, Next e Typescript'
    />
  </>
)

export const GlobalHead = () => (
  <>
    <meta charSet='utf-8' />
    <meta name='target'         content='all' />
    <meta name='language'       content='pt-br' />
    <meta name='distribution'   content='Global' />
    <meta name='category'       content='Portfólio' />
    <meta name='url'            content={personal.url} />
    <meta name='identifier-URL' content={personal.url} />
    <meta name='robots'         content='index, follow' />
    <meta name='reply-to'       content={personal.email} />
    <meta name='summary'        content='Desenvolvedor web' />
    <meta name='owner'          content='Miguel Andrade Barreto' />
    <meta name='topic'          content='Desenvolvedor web next' />
    <meta name='subject'        content='Miguel Andrade Barreto' />
    <meta name='copyright'      content='Miguel Andrade Barreto' />
    <meta name='subtitle'       content='Desenvolvedor front-end júnior' />
    <meta name='viewport'       content='width=device-width, initial-scale=1' />
    <meta name='author'         content={`Miguel Andrade Barreto, ${personal.email}`} />

    <meta
      name='description' 
      content='Portfólio de Miguel Andrade Barreto, desenvolvedor web júnior, focado em front-end com React, Next e Typescript'
    />
    <meta
      name='keywords'
      content='Miguel Andrade Barreto, Miguel, Miguel Andrade, Miguel Barreto, miguelbarreto, miguelandrade,  Desenvolvedor Web, front-end, front end, full stack, full-stack, react,next, nextjs, reactjs, react js, typescript, Steams Lab, Anhembi Morumbi, instintos, júnior'
    />
    <meta
      name='abstract'
      content='Portfólio de Miguel Andrade Barreto, desenvolvedor web focado em front-end com react e next'
    />

    <link rel='icon'      href='/favicon.ico' type='image/x-icon' />

    <FacebookOG />
    <TwitterOG />
    <Fonts />
  </>
)
