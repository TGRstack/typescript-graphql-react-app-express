const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')

const STATICS = 'assets'
const APP = 'app'
const SERVER = 'server'

const src = (() => {
  const _app = path.join(srcPath, APP)
  const _server = path.join(srcPath, SERVER)

  return {
    _: srcPath,
    app: {
      _: _app,
      assets: path.join(_app, STATICS),
      entry: path.join(_app, 'index.tsx'),
      client: path.join(_app, 'index.template.html'),
    },
    server: {
      _: _server,
      assets: path.join(_server, STATICS),
      entry: path.join(_server,  'index.ts'),
    }
  }
})()

const build = (() => {
  const _build = path.resolve(rootPath, 'build')
  const _app = path.resolve(_build, APP)
  const _server = path.resolve(_build, SERVER)

  return {
    _: _build,
    app: {
      _: _app,
      assets: path.resolve(_app, STATICS),
      client: _app,
    },
    server: {
      _: _server,
      assets: path.resolve(_server, STATICS),
    },
  }
})()

module.exports = {
  _: rootPath,
  node_modules: path.resolve(rootPath, 'node_modules'),
  build,
  src,
  STATICS,
  SERVER,
}
