import * as React from 'react'

// import MobileHeader from '../mobileHeader'
import Body from './Body'
import Content from './Content'

interface IProps {
  children: React.ReactChild |  React.ReactChild[],
  // navbar?: IHeader,
}

export default function Page({children}: IProps) {
  return <Body>
    {/* <MobileHeader /> */}
    <Content>
      {children}
    </Content>
  </Body>
}
