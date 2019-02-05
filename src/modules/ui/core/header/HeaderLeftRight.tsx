import * as React from 'react'

import * as T from 'modules/ui/core/theme.scss'
import * as S from './Header.scss'

interface IProps {
  leftItems: React.ReactChild[],
  rightItems: React.ReactChild[],
}

class HeaderLeftRight extends React.Component<IProps, {}> {
  renderItems(items: React.ReactChild[]) {
    return items.map((item, i) => <li key={i}>
      {item}
    </li>)
  }

  render() {
    const {
      leftItems, rightItems
    } = this.props

    return <nav className={[S.container, T.fill_primary].join(' ')}>
      <div className={S.list}>
        <ul>
          {this.renderItems(leftItems)}
        </ul>
      </div>
      <div className={[S.list, S.right].join(' ')}>
        <ul>
          {this.renderItems(rightItems)}
        </ul>
      </div>
    </nav>
  }
}

export default HeaderLeftRight
