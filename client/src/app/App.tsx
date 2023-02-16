import { FC } from "react"

import AppRouter from "@/components/router"
import { Container } from "@/components/ui"
import { Modal } from "@/components/common"

const App: FC = () => (
  <Container>
    <Modal />
    <AppRouter />
  </Container>
)

export default App
