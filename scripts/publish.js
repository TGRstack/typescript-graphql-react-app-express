const { series, } = require('nps-utils') // rimraf concurrent, setColors
const git = require('./git.js')

module.exports = {
  default: series.nps('publish.npm', 'publish.git'),
  npm: 'npm publish --tag next',
  git: git.tags.push,
}
