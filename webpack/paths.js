const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const srcPath = path.resolve(rootPath, 'src')

const SERVER = ''

const build = (() => {
  const _build = path.resolve(rootPath, 'build')
  const _server = path.resolve(_build, SERVER)

  return {
    _: _build,
    server: {
      _: _server,
    },
  }
})()

const src = (() => {
  const _server = path.join(srcPath, SERVER)
  return {
    _: srcPath,
    server: {
      _: _server,
      entry: path.join(_server,  'index.ts'),
    }
  }
})()

module.exports = {
  _: rootPath,
  build,
  src,
  SERVER,
}
