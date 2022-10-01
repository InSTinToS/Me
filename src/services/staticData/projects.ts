import { IProject } from '@app/components/templates/Home/Projects/Project/types'

export const projects: IProject[] = [
  {
    name: 'Steams Lab',
    location: 'Universidade Anhembi Morumbi',
    date: { start: '06/2019', end: '12/2021' },
    subtitle: 'Projeto de iniciação Científica',
    links: { url: 'https://dev.steamslab.com/home' },
    occupations: ['Desenvolvedor Front-end', 'Designer UI/UX'],
    files: [
      { alt: 'Full app', dir: '/steamsLab/full.mp4', isVideo: true },
      { alt: 'Sign-in page', dir: '/steamsLab/home.png' },
      { alt: 'Sign-up page', dir: '/steamsLab/sign-up.png' },
      { alt: 'Seasons page', dir: '/steamsLab/seasons.png' },
      { alt: 'Solicitation page', dir: '/steamsLab/solicitation.png' }
    ],
    paragraphs: [
      'No segundo semestre da universidade ingressei em um projeto de iniciação científica junto a um professor e dois alunos. O professor atuava como Product Owner e Scrum Master, um dos alunos como desenvolvedor back end, o outro como devops, e eu como front end e design.',
      'Realizávamos reuniões semanalmente para decidir as etapas da Sprint marcando tudo no Trello e no Slack, e diariamente com a equipe de desenvolvimento para discutir as melhores soluções e garantir uma boa comunicação e entendimento do projeto. Apesar de não possuirmos horário fixo, ficávamos em média seis horas por dia programando, todos os dias.',
      'Neste projeto utilizei HTML, CSS, Typescript, Figma e React, além de outros pacotes relacionados como o Styled- Components, React Router, Redux Toolkit, Framer Motion, Cypress, etc.'
    ]
  },
  {
    name: 'MyTattoo',
    subtitle: 'Rede social de tatuagem',
    occupations: ['Desenvolvedor Full-stack', 'Designer UI/UX'],
    date: { start: '07/2022' },
    files: [
      { alt: 'Feed', dir: '/myTattoo/feed.png' },
      { alt: 'Sign-in', dir: '/myTattoo/sign-in.png' },
      { alt: 'Sign-up', dir: '/myTattoo/sign-up.png' }
    ],
    paragraphs: [
      'MyTattoo é um dos meus primeiros projetos para praticar meus conhecimentos Full-stack, por enquanto é apenas uma rede social com o tema de tatuagem, mas tenho objetivos ambiciosos para este projeto.'
    ],
    links: {
      url: 'https://mytattoo.vercel.app',
      project: 'https://github.com/mytattoo-org'
    }
  },
  {
    name: 'Youtube Clone',
    date: { start: '07/2022' },
    subtitle: 'Clone UI do Youtube',
    files: [{ alt: 'feed', dir: '/youtubeClone/feed.png' }],
    occupations: ['Desenvolvedor Full-stack', 'Designer UI/UX'],
    paragraphs: [],
    links: {
      url: 'https://youtube-clone-lyart.vercel.app/',
      project: 'https://github.com/InSTinToS/Youtube-Clone'
    }
  }
]
