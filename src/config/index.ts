import { isProd } from './environment'
import { webaddress } from '/modules/utils/string'

const {
  GRAPHQL_EXPLORE = '',
  GRAPHQL_REST = '',
  GRAPHQL_WS = '',
  HOST_NAME = 'localhost',
  JWT_SECRET = 'crazycat',
  PORT = 3000,
  SSL: SSL_ENABLED,
  SSL_CRT,
  SSL_KEY,
} = process.env

const HOST_PATH = webaddress({
  host: HOST_NAME,
  path: '',
  port: PORT,
}).slice(0, -1)

const SSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false

export default {
  GRAPHQL_EXPLORE: GRAPHQL_EXPLORE || GRAPHQL_REST,
  GRAPHQL_REST,
  GRAPHQL_WS,

  HOST_PATH,

  isProd,

  JWT_SECRET,

  PORT,
  SSL,
  SSL_CRT,
  SSL_KEY,
}
