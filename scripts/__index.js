const { series, } = require('nps-utils') // rimraf concurrent, setColors

const build = require('./build.js')
const commit = require('./commit.js')
const lint = require('./lint.js')
const npm = require('./npm.js')
const release = require('./release.js')
const scrub = require('./scrub.js')
const shortcuts = require('./shortcuts')
const start = require('./start.js')
const test = require('./test.js')

const git = {
  tags: {
    push: 'git push --follow-tags origin master',
    deleteAllLocally: "git tag -d `git tag | grep -E '.'`",
  }
}

const publish = {
  default: series.nps('publish.npm', 'publish.git'),
  npm: 'npm publish --tag next',
  git: git.tags.push,
}

const scripts =  {
  build,
  commit,
  default: start.default,
  git,
  lint,
  npm,
  publish,
  release,
  start,
  scrub,
  test,
}

// appends scripts to shortcuts so they are grepp'd first
module.exports = Object.assign({},
  shortcuts,
  scripts,
)
