import * as React from 'react'

import Header, { IHeader } from '../header'
import Body from './Body'
import Content from './Content'

interface IProps {
  children: React.ReactChild |  React.ReactChild[],
  navbar: IHeader,
}

export default function Page({children, navbar}: IProps) {
  return <Body>
    <Header {...navbar} />
    <Content>
      {children}
    </Content>
  </Body>
}
