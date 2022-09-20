import { GraphQLClient } from 'graphql-request'
import { QueryClient } from 'react-query'

export const reactQueryClient = new QueryClient({})

export const api = new GraphQLClient('http://localhost:3001/graphql', {})
