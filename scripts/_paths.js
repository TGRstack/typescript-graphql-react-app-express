const path = require('path');
const rootPath = path.resolve(__dirname, '..')

const STATICS = 'assets'
const APP = 'app'
const SERVER = 'server'

const build = (() => {
  const _build = path.resolve(rootPath, 'build')
  const _app = path.resolve(_build, APP)
  const _server = path.resolve(_build, SERVER)

  return {
    _: _build,
    app: {
      _: _app,
      client: path.join(_app, 'index.template.html'),
      assets: path.resolve(_app, STATICS),
    },
    server: {
      _: _server,
      assets: path.resolve(_server, STATICS),
    },
  }
})()

const src = (() => {
  const srcPath = path.resolve(rootPath, 'src')
  const _app = path.join(srcPath, APP)
  const _server = path.join(srcPath, SERVER)

  return {
    _: srcPath,
    app: {
      _: _app,
      entry: path.join(_app, 'index.tsx'),
      client : path.join(_app, 'index.template.html'),
      assets: path.join(_app, STATICS),
    },
    server: {
      _: _server,
      assets: path.join(_server, STATICS),
      entry: path.join(_server,  'index.ts'),
    }
  }
})()

const watchPaths = (() => {
  const P = 'src/'
  const A = P+APP+'/'
  const S = P+SERVER+'/'
  const W = 'webpack/'
  const X = '**/'

  const commonPaths = [
    '.env',
    '.env.development',
    // NOTE: this file and other shared
    'scripts/_*.js',
    'tslint.json',
    'tsconfig.json',
    'package.json',
    P+'types/*',
    P+'types/'+X+'*',
    P+'types/'+X+X+'*',
    P+'helpers/*',
    P+'helpers/'+X+'*',
    P+'helpers/'+X+X+'*',
    W+'*.common.js',
    W+'paths.js',
    W+'config.js',
  ]

  return Object.assign({}, {
    // on Linux chokidar doesn't run unless that level of the heirarchy is called...
    client: [
      A+'*.*',
      A+X+'*.*',
      A+X+X+'*.*',
      A+X+X+X+'*.*',
      A+X+X+X+X+'*.*',
      A+X+X+X+X+X+'*.*',
      // A+'*.ts',
      // A+'*.tsx',
      // A+'*.s?css',
      // A+X+'*.ts',
      // A+X+'*.tsx',
      // A+X+'*.s?css',
      // A+X+X+'*.ts',
      // A+X+X+'*.tsx',
      // A+X+X+'*.s?css',
      // A+X+X+X+'*.ts',
      // A+X+X+X+'*.tsx',
      // A+X+X+X+'*.s?css',
      // A+X+X+X+X+'*.ts',
      // A+X+X+X+X+'*.tsx',
      // A+X+X+X+X+'*.s?css',
      // A+X+X+X+X+X+'*.ts',
      // A+X+X+X+X+X+'*.tsx',
      // A+X+X+X+X+X+'*.s?css',
      A+'assets/*',
      A+'assets/'+X+'*',
      A+'assets/'+X+X+'*',
      W+'*.client.js',
      W+X+'*.client.js',
      W+X+X+'*.client.js',
      ...commonPaths
    ].join(' '),
    server: [
      S+'*.ts',
      S+X+'*.ts',
      S+X+X+'*.ts',
      S+X+X+X+'*.ts',
      S+X+X+X+X+'*.ts',
      S+X+X+X+X+X+'*.ts',
      S+'assets/*',
      S+'assets/'+X+'*',
      S+'assets/'+X+X+'*',
      W+'*.server.js',
      W+X+'*.server.js',
      W+X+X+'*.server.js',
      ...commonPaths
    ].join(' '),
  })
})()

const wpPaths = (() => {
  const _wpPath = path.resolve(rootPath, 'webpack')
  function mkWp() {
    return path.join(_wpPath, ...Object.values(arguments))
  }

  return {
    client: {
      dev: mkWp('webpack.dev.client.js'),
      prod: mkWp('webpack.prod.client.js'),
    },
    server: {
      dev: mkWp('webpack.dev.server.js'),
      prod: mkWp('webpack.prod.server.js'),
    }
  }
})()

module.exports = {
  rootPath,
  build,
  src,
  wp: wpPaths,
  watch: watchPaths,
}
