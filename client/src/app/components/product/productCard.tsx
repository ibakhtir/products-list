import { FC } from "react"
import { Link } from "react-router-dom"

import { IProduct } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { openModal, setActiveProduct, setModalView } from "@/redux/modal"
import { Button } from "@/components/ui"
import { Trash } from "@/components/icons"

interface IProductCard {
  product: IProduct
}

const s = {
  container: `relative`,
  imgWrapper: `relative rounded overflow-hidden group transition`,
  imgContainer: `flex justify-center items-center w-full h-full`,
  image: `group-hover:scale-110 transition duration-300`,
  btnContainer: `flex flex-col justify-center items-center gap-y-1 absolute top-1 right-1`,
  button: `bg-white rounded w-10 h-10 opacity-75 hover:opacity-100 outline-offset-1`,
  title: `font-semibold text-sm overflow-hidden text-ellipsis whitespace-nowrap mt-3`
}

const ProductCard: FC<IProductCard> = ({ product }) => {
  const { _id, name, imageUrl } = product

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(openModal())
    dispatch(setModalView("DELETE_VIEW"))
    dispatch(setActiveProduct(_id))
  }

  return (
    <div className={s.container}>
      <Link to={`/product/${_id}`} aria-label={name}>
        <div className={s.imgWrapper}>
          <div className={s.imgContainer}>
            <img src={imageUrl} alt={name} className={s.image} />
          </div>
        </div>

        <h4 className={s.title}>{name}</h4>
      </Link>

      <div className={s.btnContainer}>
        <Button
          aria-label="Delete product"
          className={s.button}
          onClick={handleClick}
        >
          <Trash />
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
