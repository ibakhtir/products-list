import { Router } from "express"

import productRouter from "./product.routes"
import commentRouter from "./comment.routes"

const router = Router({ mergeParams: true })

router.use("/product", productRouter)
router.use("/comment", commentRouter)

export default router
