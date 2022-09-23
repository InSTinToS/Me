export interface IProject {
  name: string
  subtitle?: string
  location?: string
  occupation?: string
  paragraphs: string[]
  date?: {
    start: string
    end?: string
  }
  files: {
    dir: string
    alt: string
    isVideo?: boolean
  }[]
}
