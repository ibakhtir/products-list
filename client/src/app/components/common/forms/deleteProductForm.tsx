import { FC } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getActiveProduct } from "@/redux/modal"
import { removeProduct } from "@/redux/products"
import { Button } from "@/components/ui"

interface IDeleteForm {
  onClose: () => void
}

const s = {
  container: `text-center sm:p-4 md:px-8`,
  header: `text-lg text-gray-700 mb-8`,
  btnContainer: `flex justify-center items-center space-x-2 md:space-x-4`,
  cancel: `bg-white text-black border w-full py-2.5 rounded hover:opacity-75`
}

const DeleteProductForm: FC<IDeleteForm> = ({ onClose }) => {
  const activeProduct = useAppSelector(getActiveProduct)

  const dispatch = useAppDispatch()

  const handleDelete = () => {
    if (activeProduct) {
      dispatch(removeProduct(activeProduct))
    }

    onClose()
  }

  return (
    <div className={s.container}>
      <h3 className={s.header}>
        Are you sure you want to delete this product?
      </h3>
      <div className={s.btnContainer}>
        <Button aria-label="Delete product" onClick={handleDelete}>
          Delete
        </Button>
        <Button aria-label="Close modal" className={s.cancel} onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default DeleteProductForm
