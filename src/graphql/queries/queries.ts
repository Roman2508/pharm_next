import { gql } from 'graphql-request'

export const GET_HEADER = gql`
  query GetHeader {
    header {
      data {
        attributes {
          Header {
            ...GetNavigation
            ...GetHeaderIcons
            ...GetHeaderSocial
          }
        }
      }
    }
  }
`
