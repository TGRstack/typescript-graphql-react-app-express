import * as React from 'react'
// TODO: replace HashRouter w/ server defined routes
import { HashRouter } from 'react-router-dom'

export default function({children}: {children: React.ReactChild}) {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}
