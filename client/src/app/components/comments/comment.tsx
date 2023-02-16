import { FC } from "react"

import { IComment } from "@/types"
import { useAppDispatch } from "@/redux/hooks"
import { removeComment } from "@/redux/comments"
import { Cross } from "@/components/icons"
import { Button } from "@/components/ui"

interface ICommentCard {
  comment: IComment
}

const s = {
  wrapper: `bg-gray-100 rounded mb-2 p-4`,
  container: `flex justify-between items-start space-x-4`
}

const Comment: FC<ICommentCard> = ({ comment }) => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(removeComment(comment._id))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div>{comment.description}</div>
        <Button
          aria-label="Delete comment"
          variant="naked"
          onClick={handleDelete}
        >
          <Cross />
        </Button>
      </div>
    </div>
  )
}

export default Comment
