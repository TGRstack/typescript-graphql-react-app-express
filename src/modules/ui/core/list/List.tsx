import * as React from 'react'
import { ReactChildren } from '../../types/common'

import { IList, ListContainer, } from '.'

interface IProps extends IList {
  children: ReactChildren,
}

// tslint:disable-next-line no-any
export default class SelectableList extends React.PureComponent<IProps, any> {
  renderListItem(I: JSX.Element, key: number = 0) {
    return <li
      key={key}
    >
      {I}
    </li>
  }
  render() {
    if (!this.props.children.length) {
      return <ListContainer {...this.props}>
        {this.renderListItem(this.props.children)}
      </ListContainer>
    }

    return <ListContainer {...this.props}>
      {this.props.children.map((i: JSX.Element, k: number) =>
        this.renderListItem(i, k)
      )}
    </ListContainer>
  }
}
