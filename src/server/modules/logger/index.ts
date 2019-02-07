import { isProd } from '!server/config/'
import config from './config'
import * as levels from './levels'
import winston from './winston'

const logger = new winston({
  config: config({isProd}),
  levels,
}).app

export default logger
