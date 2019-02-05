import * as React from 'react'

import * as S from './page.scss'

export default function Content({children}: {children: React.ReactChild |  React.ReactChild[]}) {
  return <div id="content" className={S.content}>
      {children}
  </div>
}
