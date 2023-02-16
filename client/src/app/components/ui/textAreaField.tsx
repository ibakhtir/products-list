import { FC } from "react"
import cn from "clsx"

import { ITarget, IForm } from "@/types"

const s = {
  label: `block font-medium text-sm text-gray-900 mb-1.5`,
  basicTextArea: `block text-sm border rounded outline-none w-full p-2.5`,
  validTextArea: `bg-gray-50 border-gray-300 text-gray-900`,
  invalidTextArea: `bg-red-50 border-red-300 text-red-900`,
  error: `block text-sm text-red-600 mt-1.5`
}

const TextField: FC<IForm> = ({
  label,
  name,
  value,
  placeholder,
  error,
  onChange
}) => {
  const handleChange = ({ target }: ITarget) => {
    onChange({
      name: target.name,
      value: target.value
    })
  }

  return (
    <div>
      {label ? (
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={3}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        className={cn(s.basicTextArea, {
          [s.validTextArea]: !error,
          [s.invalidTextArea]: error
        })}
      />
      {error ? <span className={s.error}>{error}</span> : null}
    </div>
  )
}

export default TextField
