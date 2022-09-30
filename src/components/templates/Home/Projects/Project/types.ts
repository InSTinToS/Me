export interface IProject {
  name: string
  subtitle?: string
  location?: string
  occupations?: string[]
  paragraphs: string[]
  date?: { start: string; end?: string }
  files: { dir: string; alt: string; isVideo?: boolean }[]
}

export interface IProjectProps extends IProject {}