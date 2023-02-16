import { FC, useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  getProductsLoadingStatus,
  getProducts,
  loadProductsList
} from "@/redux/products"
import { openModal, setModalView } from "@/redux/modal"
import { getSort } from "@/redux/sort"
import { rangeMap, sortBy } from "@/utils/helpers"
import { Button, Skeleton } from "@/components/ui"
import { Sort } from "@/components/common"
import { ProductCard } from "@/components/product"

const s = {
  container: `flex flex-col pt-3 pb-12`,
  header: `flex justify-between items-center h-24`,
  title: `font-medium text-lg`,
  buttonsContainer: `flex justify-center items-center space-x-4`,
  button: `bg-black text-white rounded hover:opacity-75 py-2.5 px-4`,
  productsList: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`,
  skeletonBody: `w-60 h-60`
}

const ProductsListView: FC = () => {
  const selectedSort = useAppSelector(getSort)
  const productsLoadingStatus = useAppSelector(getProductsLoadingStatus)
  const products = useAppSelector(getProducts)

  const sortedProducts = sortBy(selectedSort.value, products)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProductsList())
  }, [dispatch])

  const handleClick = () => {
    dispatch(openModal())
    dispatch(setModalView("ADD_VIEW"))
  }

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h5 className={s.title}>Products</h5>
        <div className={s.buttonsContainer}>
          <Sort />
          <Button
            aria-label="Open modal"
            className={s.button}
            onClick={handleClick}
          >
            New Product
          </Button>
        </div>
      </div>

      {!productsLoadingStatus ? (
        <div className={s.productsList}>
          {sortedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className={s.productsList}>
          {rangeMap(8, (i) => (
            <Skeleton key={i}>
              <div className={s.skeletonBody} />
            </Skeleton>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductsListView
