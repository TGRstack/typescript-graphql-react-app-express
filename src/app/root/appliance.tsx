import Page from '_modules/ui/tgr/page'
import * as React from 'react'

import Routes from '../routes'
import './global.scss'
import Helmet from './helmet'
import './reset.css'
// import './fonts'

export default function Appliance() {
  return <Page>
    <Helmet />
    <Routes />
  </Page>
}
