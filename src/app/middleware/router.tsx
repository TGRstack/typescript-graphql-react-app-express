import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function({children}: {children: React.ReactChild}) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}
