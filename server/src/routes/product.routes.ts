import { Router } from "express"

import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/products"

const productRouter = Router({ mergeParams: true })

productRouter.route("/").get(getAllProducts).post(createProduct)

productRouter.route("/:productId").patch(updateProduct).delete(deleteProduct)

export default productRouter
