import { FC, ReactNode } from "react"
import cn from "clsx"

interface ISkeleton {
  children: ReactNode
  className?: string
}

const s = {
  skeleton: `animate-pulse bg-gray-300`
}

const Skeleton: FC<ISkeleton> = ({ children, className }) => (
  <span className={cn(s.skeleton, className)}>{children}</span>
)

export default Skeleton
