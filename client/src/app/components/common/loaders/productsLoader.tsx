import { FC, ReactElement, useEffect } from "react"

import { useAppDispatch } from "@/redux/hooks"
import { loadProductsList } from "@/redux/products"

interface IProductsLoader {
  children: ReactElement
}

const ProductsLoader: FC<IProductsLoader> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProductsList())
  }, [dispatch])

  return children
}

export default ProductsLoader
