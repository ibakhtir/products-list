import { FC, ButtonHTMLAttributes } from "react"
import cn from "clsx"

import { LoadingDots } from "@/components/ui"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "naked"
  loading?: boolean
}

const s = {
  basic: `inline-flex justify-center items-center font-semibold text-sm tracking-wide
  uppercase leading-6 focus:ring-0 transition ease-in-out duration-150`,
  default: `bg-black text-white w-full py-2.5 rounded hover:opacity-75`,
  naked: `bg-transparent text-current hover:opacity-75`,
  disabled: `opacity-75 cursor-not-allowed`
}

const Button: FC<IButton> = ({
  type = "button",
  variant = "default",
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}) => {
  const rootClassName = cn(s.basic, className, {
    [s.default]: variant === "default" && !className,
    [s.naked]: variant === "naked",
    [s.disabled]: disabled || loading
  })

  return (
    <button
      type={type}
      className={rootClassName}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
      {loading && <LoadingDots />}
    </button>
  )
}

export default Button
