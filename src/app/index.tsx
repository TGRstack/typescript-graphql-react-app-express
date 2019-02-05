// import './fonts'

import * as React from 'react'
// import Helmet from './Helmet'

import 'modules/ui/core/global.scss'
import Page from 'modules/ui/core/page'
import Routes from '../routes'

import navbar from './navbar'

export default function App() {
  return <Page navbar={navbar}>
    {/* <Helmet /> */}
    <Routes />
  </Page>
}
