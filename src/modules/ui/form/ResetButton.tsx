import * as React from 'react'

import { buttonDefaults, IButton, } from '../core/button'

interface IProps extends IButton {
  handleClick: (event: MouseEvent<HTMLInputElement>) => void,
}

interface IState {
}

export default class ResetButton extends React.Component<IProps, IState> {
  static defaultProps = {...buttonDefaults, label: 'Reset!'}

  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return <div className="ui_button_form--container">
      <input
        type="button"
        value={this.props.label}
        disabled={this.props.disabled}
        onClick={this.props.handleClick}
      />
    </div>
  }
}
