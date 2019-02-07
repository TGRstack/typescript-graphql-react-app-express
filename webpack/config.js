const path = require('path')
const paths = require('./paths')

// ## opts for helpers
const {
  PORT = 3000,
  HOST_NAME = 'localhost',
  NODE_ENV = 'dev',
  SSL: SSL_ENABLED,
} = process.env

const isSSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false
const isProd = NODE_ENV === 'prod' || NODE_ENV === 'production'
const HOST_PATH = `http${isSSL ? 's' : ''}://${HOST_NAME}:${PORT}/`

const htmlPluginOptions = {
  template: paths.src.app.client,
  filename: 'index.html',
  appMountId: 'react-root',
  inject: true,
}

const alias =  {
  "!server":      paths.src.server._,
  "!app":         paths.src.app._,

  // implicitely app modules
  "_assets":      path.resolve(paths.src.app._, "assets/"),
  "_config":      path.resolve(paths.src.app._, "config/"),
  "_components":  path.resolve(paths.src.app._, "components/"),
  "_gql":         path.resolve(paths.src.app._, "gql/"),
  "_modules":     path.resolve(paths.src.app._, "modules/"),
  "_root":        path.resolve(paths.src.app._, "root/"),
  "_routes":      path.resolve(paths.src.app._, "routes/"),
  "_types":       path.resolve(paths.src.app._, "types/"),
  "_utils":       path.resolve(paths.src.app._, "utils/"),
}

module.exports = {
  alias,
  HOST_PATH,
  htmlPluginOptions,
  isSSL,
  isProd,
}
