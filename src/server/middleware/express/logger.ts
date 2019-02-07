import { isProd } from '!server/config/'
import * as express from 'express'
// import SystemLogger from '!server/modules/logger'
import * as morgan from 'morgan'

export default function logger(app: express.Application) {
  // Morgan Logger
  const morganLevel = isProd ? 'combined' : 'dev'
  // FIXME: morgan logs written into winston
  // const {stream} = SystemLogger
  const morganLogger = morgan(morganLevel) // , { stream })
  app.use(morganLogger)
}
