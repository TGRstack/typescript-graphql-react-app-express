// TODO: refactor playground and logger to apolloMiddleware

import { ApolloServer } from 'apollo-server-express'
import config from 'config'
import * as colors from 'config/console_colors'
import { Resolvers, Schema, } from 'gql/index'

const playgroundConfig = (() => {
  // https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html#Configuring-Playground

  const defaultQuery = 'query{ hello }'

  return {
    playground: {
      // settings: {
      //   'editor.theme': 'light',
      // },
      responses: ['{}'],
      tabs: [
        {
          endpoint: config.GRAPHQL_EXPLORE || '/graphql',
          query: defaultQuery,
        },
      ],
    }
  }
})()

const loggingConfig = (() => {
  return {
    formatError: (error: any) => {       // tslint:disable-line no-any
      !config.isProd && console.log(colors.error(error))        // tslint:disable-line no-console
      return error
    },
    formatResponse: (response: any) => { // tslint:disable-line no-any
      !config.isProd && console.log(colors.info(response))      // tslint:disable-line no-console
      return response
    },
  }
})()

const apolloConfig = (() => {
  // config.isProd?
  // introspection: true,
  // playground: true,

  return {
    resolvers: Resolvers,
    typeDefs: Schema,
    ...playgroundConfig,
    ...loggingConfig
  }
})()

export default new ApolloServer(apolloConfig)
