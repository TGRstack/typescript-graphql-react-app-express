import * as React from 'react'
import Helmet from 'react-helmet'

import * as SC from '_modules/ui/tgr/common.scss'
import * as S from './Home.css'
import Logo from './Logo'

// const LazyLogo = React.lazy(() => import('./Logo'))

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      {/* <LazyLogo /> */}
      <div className={SC.center}>
        <Logo />
      </div>
    </div>
  )
}

export default HomeEntrancePage
