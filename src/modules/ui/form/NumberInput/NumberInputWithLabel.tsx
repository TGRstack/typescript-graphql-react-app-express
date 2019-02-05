import * as React from 'react'

import { uuid } from 'modules/utils/string'
import { INumberInput } from '.'
import * as S from './NumberInput.scss'

interface IProps extends INumberInput {
  // tslint:disable-next-line no-any
  handleChange: (value: number) => any
  value: number,
  label: string,
}

interface IState {
  value: number,
}

export default class NumberInput extends React.Component<IProps, IState> {
  static defaultProps = {
    name: 'text',
    placeholder: 'put some text in here....',
  }
  id = uuid()

  constructor(props: IProps) {
    super(props)

    this.state = {
      value: props.value,
    }
  }

  componentWillReceiveProps(np: IProps) {
    if (np.value !== this.state.value) {
      this.setState({value: np.value})
    }
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {value} = e.currentTarget
    const numb = parseInt(value, 10)
    this.setState(ns => {
      this.props.handleChange(numb)
      return {
        ...ns,
        value: numb,
      }
    })
  }

  render() {
    // TODO: support classNames in props
    // TODO: add debounce to onChange
    return <div className={S.container}>
      <label htmlFor={this.id}>{this.props.label}</label>
      <input
        id={this.id}
        type="number"
        className={S.text}
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.props.handleKey}
        name={this.props.name}
        placeholder={this.props.placeholder}
        tabIndex={0}
        min={this.props.min}
        max={this.props.max}
        disabled={this.props.disabled}
      />
    </div>
  }
}
