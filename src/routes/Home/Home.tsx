import Gx from '@tgrx/gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import Hello from 'modules/ui/core/hello'
import List from 'modules/ui/core/list'
import * as S from './Home.css'

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <List ordered>
          {Hello('Welcome to TGR React-App skeleton')}
        </List>
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
