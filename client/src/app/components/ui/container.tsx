import { FC, ReactNode } from "react"

interface IContainer {
  children: ReactNode
}

const s = {
  container: `min-h-screen max-w-6xl mx-auto px-4`
}

const Container: FC<IContainer> = ({ children }) => (
  <main className={s.container}>{children}</main>
)

export default Container
