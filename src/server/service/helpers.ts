import * as env from '!server/config/'

export const SUCCESS_MESSAGE = () => {
  const SE = (t = '') => t.toUpperCase().substr(0, 4)
  const onlineTitle = `${SE(env.NODE_PLATFORM)} Online (${SE(env.NODE_ENV)})`

  const combo = (a: string, b: string) => [a, b].join('')

  return `\n\n
  🌐    ${onlineTitle}    🌐
  -------------------------------------------------------
  📡    endpoint    ${combo(env.HOST_PATH, '/')}
  -------------------------------------------------------`
  // ➿    websocket   ${combo(HOST_PATH, WS)}
}
