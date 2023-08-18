import { GraphQLClient } from 'graphql-request'

import { getSdk } from './__generated__'
// import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new GraphQLClient('http://localhost:1337/graphql')

// export const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
// })

export const gql = getSdk(client)
export * from './__generated__'
