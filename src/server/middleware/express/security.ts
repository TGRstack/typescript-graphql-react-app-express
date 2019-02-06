import * as cors from 'cors'
import * as express from 'express'
import * as helmet from 'helmet'

export default function expressSecurity(app: express.Application) {
  app.use(cors())
  app.use(helmet())
}

/* HELMET | https://github.com/helmetjs/helmet#how-it-works

Helmet is a collection of 14 smaller middleware functions that set HTTP response headers.
Running app.use(helmet()) will not include all of these middleware functions by default.

- [✓] dnsPrefetchControl controls browser DNS prefetching
- [✓] frameguard to prevent clickjacking
- [✓] hidePoweredBy to remove the X-Powered-By header
- [✓] hsts for HTTP Strict Transport Security
- [✓] ieNoOpen sets X-Download-Options for IE8+
- [✓] noSniff to keep clients from sniffing the MIME type
- [✓] xssFilter adds some small XSS protections
- [ ] contentSecurityPolicy for setting Content Security Policy
crossdomain for handling Adobe products' crossdomain requests
- [ ] expectCt for handling Certificate Transparency
- [ ] featurePolicy to limit your site's features
- [ ] hpkp for HTTP Public Key Pinning
- [ ] noCache to disable client-side caching
- [ ] referrerPolicy to hide the Referer header
*/
