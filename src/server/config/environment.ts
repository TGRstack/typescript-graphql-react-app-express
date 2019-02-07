// DON'T USE .env results directly because everything is a string or undefined
// use config/environment as an abstract interface and caster for .env
import { webaddress } from '!server/modules/utils/string'

const {
  SSL: SSL_ENABLED,
} = process.env

const isSSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false

const {
  NODE_ENV = 'dev',
  NODE_PLATFORM = 'server',
} = process.env
const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production'

const {
  HOST_NAME = 'localhost',
} = process.env

const {
  PORT = 3000,
  SSL_CRT,
  SSL_KEY,
} = process.env

const HOST_PATH = webaddress({
  host: HOST_NAME,
  path: '',
  port: PORT,
  protocol: isSSL ? 'https' : 'http'
}).slice(0, -1)

export {
  isProd,
  isSSL,

  HOST_PATH,

  NODE_ENV,
  NODE_PLATFORM,

  PORT,
  SSL_CRT,
  SSL_KEY,
}
