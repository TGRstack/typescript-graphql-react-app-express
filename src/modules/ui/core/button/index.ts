import { default as Button } from './Button'
export default Button

export {default as buttonDefaults} from './Button.defaults'
export {default as LinkButton } from './LinkButton'
export {default as IconButton } from './IconButton'

export interface IButton {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => any, // tslint:disable-line no-any
  disabled?: boolean,
  label?: string,
  children?: JSX.Element | JSX.Element[],
}
