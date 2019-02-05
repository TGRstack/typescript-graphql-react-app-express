import * as React from 'react'
import { HashRouter } from 'react-router-dom'

export default function({children}: {children: React.ReactChild}) {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}
