import { FC } from "react"

import AppRouter from "@/components/router"
import { Container } from "@/components/ui"
import { Modal } from "@/components/common"
import { ProductsLoader } from "@/components/common/loaders"

const App: FC = () => (
  <ProductsLoader>
    <Container>
      <Modal />
      <AppRouter />
    </Container>
  </ProductsLoader>
)

export default App
