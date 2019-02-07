// DON'T USE .env results directly because everything is a string or undefined
// use config/environment as an abstract interface and caster for .env

const {
  SSL: SSL_ENABLED,
} = process.env

const isSSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false

//
const {
  NODE_ENV,
} = process.env

const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production'

// "https://w5xlvm3vzz.lp.gql.zone/graphql"
const {
  GRAPHQL_ENDPOINT = '/graphql',
} = process.env

export {
  isProd,
  isSSL,

  GRAPHQL_ENDPOINT
}
