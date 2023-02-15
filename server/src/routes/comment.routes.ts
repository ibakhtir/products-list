import { Router } from "express"

import {
  getAllComments,
  createComment,
  deleteComment
} from "../controllers/comments"

const commentRouter = Router({ mergeParams: true })

commentRouter.route("/").get(getAllComments).post(createComment)

commentRouter.route("/:commentId").delete(deleteComment)

export default commentRouter
