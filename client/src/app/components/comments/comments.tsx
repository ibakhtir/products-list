import { FC, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import {
  getComments,
  getCommentsLoadingStatus,
  loadCommentsList
} from "@/redux/comments"
import { AddCommentForm } from "@/components/common/forms"

import Comment from "./comment"

const s = {
  commentsContainer: `mt-8`,
  header: `font-medium text-sm text-gray-900 mb-2`
}

const Comments: FC = () => {
  const { productId }: { productId: string } = useParams()

  const commentsLoadingStatus = useAppSelector(getCommentsLoadingStatus)
  const comments = useAppSelector(getComments)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCommentsList(productId))
  }, [dispatch, productId])

  return (
    <div>
      <AddCommentForm />

      {comments.length > 0 ? (
        <div className={s.commentsContainer}>
          <h5 className={s.header}>Comments</h5>
          {!commentsLoadingStatus ? (
            comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default Comments
