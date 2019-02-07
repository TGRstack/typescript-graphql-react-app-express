import serverConfig from '!server/config/'
import config from './config'
import * as levels from './levels'
import winston from './winston'

const {isProd} = serverConfig

const logger = new winston({
  config: config({isProd}),
  levels,
}).app

export default logger
