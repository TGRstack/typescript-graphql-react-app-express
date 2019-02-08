import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Error404 from './Error404'

// Lazy load content, hits the global React.Suspense in `_modules/tgr/page/Page.tsx`
const Home = React.lazy(() => import('./Home'))

export default function Routes() {
  return <Switch>
    <Route exact path="/" component={Home} />
    <Route component={Error404} />
  </Switch>
}
