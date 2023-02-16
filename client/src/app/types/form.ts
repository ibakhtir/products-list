export interface IInputValue {
  name: string
  value: string | number
}

export interface ITarget {
  target: HTMLInputElement
}

export interface IForm {
  type?: string
  label?: string
  name: string
  value: string | number
  placeholder?: string
  error?: string
  onChange: (data: IInputValue) => void
}
