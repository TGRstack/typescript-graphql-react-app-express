import * as React from 'react'
import Apollo from './apollo'
import Router from './router'

const GQL_ENDPOINT = '' // "https://w5xlvm3vzz.lp.gql.zone/graphql"

function Middlwares({children}: {children: React.ReactChild}) {
  // ROUTER must come before ALL OTHER middleware
  return (
    <Router>
      <Apollo
        graphqlURL={GQL_ENDPOINT}
      >
          {children}
      </Apollo>
    </Router>
  )
}

export default Middlwares
