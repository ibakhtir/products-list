import { FC } from "react"
import cn from "clsx"

import { ITarget, IForm } from "@/types"

const s = {
  label: `block font-medium text-sm text-gray-900 mb-1.5`,
  basicInput: `block text-sm border rounded outline-none w-full p-2.5`,
  validInput: `bg-gray-50 border-gray-300 text-gray-900`,
  invalidInput: `bg-red-50 border-red-300 text-red-900`,
  error: `block text-sm text-red-600 mt-1.5`
}

const TextField: FC<IForm> = ({
  type = "text",
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
      value: type === "number" ? Number(target.value) : target.value
    })
  }

  return (
    <div>
      {label ? (
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
      ) : null}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        className={cn(s.basicInput, {
          [s.validInput]: !error,
          [s.invalidInput]: error
        })}
      />
      {error ? <span className={s.error}>{error}</span> : null}
    </div>
  )
}

export default TextField
