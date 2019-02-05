// import Mutations, { defaultValues as mutationDefaults } from './Mutations'
import Queries from './Queries'
import Schema from './Schema'

const Resolvers = {
  // Mutation: Mutations,
  Query: Queries,
}
const ResolverDefaults = {
  // ...mutationDefaults,
}

export {
  // Mutations,
  Resolvers,
  ResolverDefaults,
  Schema,
}
