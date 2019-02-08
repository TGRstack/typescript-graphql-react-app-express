// global helmet settings
import * as React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export default function Helmet() {
  return <ReactHelmet>
    <meta charSet="utf-8" />
    <title>Typescript React Graphql w/ Express | TGRstack</title>
    <link rel="canonical" href="https://github.com/TGRstack/tgrstack.com/wiki" />
    <meta name="description" content="MVP run of the fullstack application" />
  </ReactHelmet>
}
