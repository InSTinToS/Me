export interface IProject {
  name: string
  subtitle?: string
  location?: string
  paragraphs?: string[]
  occupations?: string[]
  date?: { start: string; end?: string }
  links?: { url?: string; project?: string }
  files?: { dir: string; alt: string; isVideo?: boolean }[]
}

export interface IProjectProps extends IProject {}
