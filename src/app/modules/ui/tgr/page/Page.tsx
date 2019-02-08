import * as React from 'react'

import Spinner from '../spinner'
import Body from './Body'
import Content from './Content'

interface IProps {
  children: React.ReactChild |  React.ReactChild[],
}

export default function Page({children}: IProps) {
  return <Body>
    {/* GLOBAL LOADER TRIGGERED BY AN ASYNC ACTION */}
    <React.Suspense fallback={<Spinner />} >
      <Content>
        {children}
      </Content>
    </React.Suspense>
  </Body>
}
