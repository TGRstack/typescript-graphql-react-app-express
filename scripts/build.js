const { series, } = require('nps-utils') // rimraf, concurrent, setColors
const paths = require('./_paths.js')

module.exports = {
  default: series.nps('commit.pre', 'scrub.build', 'build.client'),
  description: 'Remove the previous build and run the compiler',
  client: 'npx webpack --config '+paths.wp.client.dev,
  production: {
    default: series.nps('commit.pre', 'scrub.build', 'build.production.client'),
    client: 'npx webpack --config '+paths.wp.client.prod,
  },
}
