import * as React from 'react'

import { buttonDefaults, IButton, } from '.'

export default class Button extends React.Component<IButton> {
  static defaultProps = buttonDefaults

  render() {
    return <button
      onClick={this.props.handleClick}
    >
      {this.props.children || this.props.label}
    </button>
  }
}
