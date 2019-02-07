import paths from '!server/config/paths'
import logger from '!server/modules/logger'
import * as express from 'express'
import * as fs from 'fs'
import * as path from 'path'

export default function expressReact(app: express.Application) {
  if (fs.existsSync(paths.client)) {
    // tslint:disable-next-line no-console
    logger.info(`[Loaded] React Client: ${path.relative('.', paths.client)}`)

    app.use(express.static(paths.app))
    app.get('*', ({}, res: Express.Response) => {
      res.sendFile(paths.client)
    })
  } else {
    logger.error(`No React Client "index.html" at: ${paths.client}`)
  }
}
