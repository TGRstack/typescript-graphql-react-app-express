import { GRAPHQL_ENDPOINT } from '_config/index'
import * as React from 'react'
import Apollo from './apollo'
import Router from './router'

export default function Middlwares({children}: {children: React.ReactChild}) {
  // ROUTER must come before ALL OTHER middleware
  return (
    <Router>
      <Apollo
        graphqlURL={GRAPHQL_ENDPOINT}
      >
          {children}
      </Apollo>
    </Router>
  )
}
