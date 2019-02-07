// tslint:disable object-literal-sort-keys

/**
 * Default levels for the npm configuration.
 * @type {Object}
 *
 * Example: `foobar: 'bold red cyanBG'`
 *
 * Font style options
 * bold, dim, italic, underline, inverse, hidden, strikethrough
 *
 * Font foreground color options
 * black, red, green, yellow, blue, magenta, cyan, white, gray, grey
 *
 * Background colors options
 * blackBG, redBG, greenBG, yellowBG, blueBG magentaBG, cyanBG, whiteBG
 */
export const colors = {
  error:   'red',
  warn:    'yellow',
  express: 'dim white',
  info:    'white',
  http:    'bold green',
  gql:     'bold blue',
  verbose: 'cyan',
  debug:   'bold magenta',
  silly:   'magenta',
}

/**
 * Default levels for the npm configuration.
 * @type {Object}
 */
// const levels = {
//   error:   0,
//   warn:    1,
//   ...
//   silly:   7,
// }
export const levels = Object.keys(colors)
  .reduce((prev, next, index) => {
    prev[next] = index
    return prev
  },      {})
