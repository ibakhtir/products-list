import { FC } from "react"

const s = {
  wrapper: `inline-flex justify-center items-center px-2`,
  dot: `bg-current rounded-full h-2 w-2 mx-0.5 animate-blink 
  [&:nth-of-type(2)]:animation-delay-[0.2s] 
  [&:nth-of-type(3)]:animation-delay-[0.4s]`
}

const LoadingDots: FC = () => (
  <span className={s.wrapper}>
    {[1, 2, 3].map((dot) => (
      <span key={dot} className={s.dot} />
    ))}
  </span>
)

export default LoadingDots
