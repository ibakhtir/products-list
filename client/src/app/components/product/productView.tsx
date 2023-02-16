import { FC } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getProductById } from "@/redux/products"
import { openModal, setActiveProduct, setModalView } from "@/redux/modal"
import { Gear } from "@/components/icons"
import { Button } from "@/components/ui"

const s = {
  container: `grid md:grid-cols-2 gap-8 pt-8 pb-12`,
  productContainer: `flex flex-col justify-center items-center`,
  productContent: `relative max-w-[400px]`,
  image: `w-full h-auto rounded`,
  editBtn: `absolute top-1 right-1 bg-white rounded w-10 h-10 
  opacity-75 hover:opacity-100 outline-offset-1`,
  productName: `font-medium text-center mt-3`,
  productData: `flex flex-col justify-start text-gray-500 space-y-2 mt-4`
}

const ProductView: FC = () => {
  const { productId }: { productId: string } = useParams()

  const product = useAppSelector(getProductById(productId))

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(openModal())
    dispatch(setModalView("EDIT_VIEW"))
    dispatch(setActiveProduct(productId))
  }

  return product ? (
    <div className={s.container}>
      <div className={s.productContainer}>
        <div className={s.productContent}>
          <img src={product.imageUrl} alt={product.name} className={s.image} />

          <Button
            aria-label="Open modal"
            className={s.editBtn}
            onClick={handleClick}
          >
            <Gear />
          </Button>

          <div className={s.productName}>{product.name}</div>

          <div className={s.productData}>
            <div>Count: {product.count}</div>
            <div>Weight: {product.weight}</div>
            <div>Width: {product.size.width}</div>
            <div>Height: {product.size.height}</div>
          </div>
        </div>
      </div>

      <div>Comments</div>
    </div>
  ) : null
}

export default ProductView
