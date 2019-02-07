// const { series, } = require('nps-utils') // rimraf concurrent, setColors

const build = require('./build.js')
const commit = require('./commit.js')
const git = require('./git.js')
const lint = require('./lint.js')
const npm = require('./npm.js')
const open = require('./open.js')
const postinstall = require('./postinstall.js')
const publish = require('./publish.js')
const release = require('./release.js')
const scrub = require('./scrub.js')
const shortcuts = require('./shortcuts')
const server = require('./server')
const start = require('./start.js')
const test = require('./test.js')


const scripts =  {
  build,
  commit,
  default: start.default,
  git,
  lint,
  npm,
  open,
  postinstall,
  publish,
  release,
  start,
  scrub,
  server,
  test,
}

// appends scripts to shortcuts so they are grepp'd first
module.exports = Object.assign({},
  shortcuts,
  scripts,
)
