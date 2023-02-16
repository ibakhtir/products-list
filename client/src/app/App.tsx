import AppRouter from "@/components/AppRouter"
import { Container } from "@/components/ui"
import { Modal } from "@/components/common"

function App() {
  return (
    <Container>
      <Modal />
      <AppRouter />
    </Container>
  )
}

export default App
