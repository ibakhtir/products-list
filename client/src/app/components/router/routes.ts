import Home from "@/pages/home"
import Product from "@/pages/product"
import { routes } from "@/utils/constants"

export const publicRoutes = [
  {
    path: routes.HOME_ROUTE,
    Component: Home
  },
  {
    path: `${routes.PRODUCT_ROUTE}/:productId`,
    Component: Product
  }
]
