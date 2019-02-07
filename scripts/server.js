/** `nps server.open`
 *
 * sleep N can be adjusted to the time it takes for your machine to build
 *   and the idea can be used by a team by using a .env variable
 *
**/

const { concurrent } = require('nps-utils') // series, setColors

const BUILD_DELAY=5

module.exports = {
  default: concurrent.nps('server.start', 'server.open'),
  start: 'npx nodemon',
  open: 'sleep '+BUILD_DELAY+' && nps open.web',
  production: 'node build/server/main.js',
}
