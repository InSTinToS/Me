import { IProject } from './types'

import { useState } from 'react'

const projects: IProject[] = [
  {
    name: 'SteamsLab',
    location: 'Universidade Anhembi Morumbi',
    subtitle: 'Projeto de iniciação Científica',
    occupation: 'Desenvolvedor Front-end & Designer UI/UX',
    date: { start: '06/2019', end: '12/2021' },
    files: [
      { alt: 'Full app', dir: 'steamsLab/full.mp4', isVideo: true },
      { alt: 'Home page', dir: 'steamsLab/home.png' }
    ],
    paragraphs: [
      'No segundo semestre da universidade ingressei em um projeto de iniciação científica junto a um professor e dois alunos. O professor atuava como Product Owner e Scrum Master, um dos alunos como desenvolvedor back end, o outro como devops, e eu como front end e design.',
      'Realizávamos reuniões semanalmente para decidir as etapas da Sprint marcando tudo no Trello e no Slack, e diariamente com a equipe de desenvolvimento para discutir as melhores soluções e garantir uma boa comunicação e entendimento do projeto. Apesar de não possuirmos horário fixo, ficávamos em média seis horas por dia programando, todos os dias.',
      'Neste projeto utilizei HTML, CSS, Typescript, Figma e React principalmente, além de outros pacotes relacionados como o Styled- Components, React Router, Redux Toolkit, Framer Motion, Cypress, etc.'
    ]
  }
]

export const useProjects = () => {
  const [project, setProject] = useState([0])

  const onProjectChange = (e: any) => {
    setProject(e)
  }

  return { projects, project, onProjectChange }
}
