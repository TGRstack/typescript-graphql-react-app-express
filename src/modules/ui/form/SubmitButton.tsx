import * as React from 'react'

import { buttonDefaults, IButton, } from '../core/button'

interface IProps extends IButton {
}

interface IState {
}

export default class SubmitButton extends React.Component<IProps, IState> {
  static defaultProps = {...buttonDefaults, label: 'Submit!'}

  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return <div className="ui_button_form--container">
      <input
        type="submit"
        value={this.props.label}
        disabled={this.props.disabled}
      />
    </div>
  }
}
