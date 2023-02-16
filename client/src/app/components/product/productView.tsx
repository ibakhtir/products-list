import { FC } from "react"
import { useParams } from "react-router-dom"

import { useAppSelector } from "@/redux/hooks"
import { getProductById } from "@/redux/products"

const ProductView: FC = () => {
  const { productId }: { productId: string } = useParams()

  const product = useAppSelector(getProductById(productId))

  return <span>{product ? product.name : product}</span>
}

export default ProductView
