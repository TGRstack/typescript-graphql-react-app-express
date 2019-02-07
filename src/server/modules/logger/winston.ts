import * as fs from 'fs'
// import * as stream from 'stream'
import * as winston from 'winston'
const {File, Console} = winston.transports

class WinstonLogger {
  app: any    // tslint:disable-line no-any // winston.
  config: any // tslint:disable-line no-any
  levels: any // tslint:disable-line no-any

  // FIXME: morgan logs written into winston
  // create a stream object with a 'write' function that will be used by `morgan`
  // public stream = () => new stream.Duplex({
  //   write(message: string) {
  //     console.log({message})
  //     this.app.express(message)
  //   }
  // })
  // public stream = split().on('data', function(message: string) {
  //   this.app.info(message)
  // })
  // public stream = {
  //   write: (message: any) => { // tslint:disable-line no-any
  //     // use the 'info' log level so the output will be picked up by both transports (file and console)
  //     console.log(message)
  //     this.app.info(message)
  //   },
  // }

  constructor({
    config, levels,
  }: {
    config: any, levels: any, // tslint:disable-line no-any
  }) {
    // NOTE: order matters, set func args first
    this.config = config
    this.levels = levels
    // this.isProd = isProd

    // instantiate new loggers with these settings
    this.setup(config.outputDir)

    // Custom loglevels and corresponding colors
    winston.addColors(levels.colors)
    // ISSUE: https://github.com/winstonjs/winston/issues/1385
    // tslint:disable-next-line no-any
    const app = (winston as any).createLogger({
      exitOnError: false, // do not exit on handled exceptions
      levels: levels.levels,
      transports: [
        // - Write all logs to `all.log`
        new File(config.file.all),
        // - Write all logs with level `info` and below to `combined.log`
        new File(config.file.combined),
        // - Write all logs error (and below) to `error.log`.
        new File(config.file.error),
        // - Console all logs isProd? info : silly
        new Console(config.console)
      ],
    })

    this.app = app
    this.init()
  }

  private init() {
    // Loaded
    this.app.info({
      message: 'Winston Logger Loaded'
    })
  }

  private setup(outputDir: string) {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir)
    }
  }
}

export default WinstonLogger
