import * as React from 'react'
import Helmet from 'react-helmet'

import * as S from './Home.css'

// import { currentCity, forecastCity16 } from './sampleData'
// data={openWeatherParser({currentCity, forecastCity: forecastCity16})}

function HomeEntrancePage() {
  return (
    <div className={S.container}>
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      Hello World
    </div>
  )
}

export default HomeEntrancePage
