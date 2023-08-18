import { GraphQLClient } from 'graphql-request'

import { getSdk } from './__generated__'
// import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new GraphQLClient(process.env.GRAPHQL_API_URL || 'http://localhost:1337/graphql', {
  headers: {
    Authorization: `bearer 9489953099ad6fc573d334ba677e1d0450f715f26ebf478588e49f6acd2bb54248f09ef668a179afa9bbefff55441ac3bb77fb83674fa79a30a0656bead695c641ac2f67c35f855122ea6258b97cec788b22a3b07e87523e628e10290ed7cb6c181230ce3419f066ef0c344e21a79953da952d1c5d790cf2d04743996667970a`,
  },
})

// export const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
// })

export const gql = getSdk(client)
export * from './__generated__'
