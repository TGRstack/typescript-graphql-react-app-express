import gql from 'graphql-tag'

// Construct a schema, using GraphQL schema language
const Schema = gql`
  type Query {
    hello: String
  }
`
export default Schema
