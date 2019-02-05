import * as React from 'react'
import { IList } from '.'

// tslint:disable-next-line no-any
export default class List extends React.PureComponent<IList, any> {
  static defaultProps = {
    ordered: false,
  }

  renderOrdered() {
    return <ol>
      {this.props.children}
    </ol>
  }
  renderUnordered() {
    return <ul>
      {this.props.children}
    </ul>
  }
  render() {
    const {ordered} = this.props
    return ordered
      ? this.renderOrdered()
      : this.renderUnordered()
  }
}
