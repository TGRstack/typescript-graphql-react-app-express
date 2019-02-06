import { isProd } from '_config/environment'
import config from './config'
import levels from './levels'
import winston from './winston'

const logger = new winston({
  config: config({isProd}),
  isProd,
  levels,
}).app

export default logger
