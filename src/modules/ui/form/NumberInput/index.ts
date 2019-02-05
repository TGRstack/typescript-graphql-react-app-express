import NumberInput from './NumberInput'
import NumberInputWithLabel from './NumberInputWithLabel'

export default {
  default: NumberInput,
  label: NumberInputWithLabel,
}

export interface INumberInput {
  handleKey?: (e: React.KeyboardEvent<HTMLInputElement>) => any // tslint:disable-line no-any
  disabled?: boolean,
  max: number,
  min: number,
  name?: string,
  placeholder?: string,
}
