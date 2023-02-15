import { Request, Response } from "express"

import Comment from "../models/Comment"

export const getAllComments = async (req: Request, res: Response) => {
  try {
    const { orderBy, equalTo } = req.query

    const comments = await Comment.find({ [`${orderBy}`]: equalTo })

    res.status(200).send(comments)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export const createComment = async (req: Request, res: Response) => {
  try {
    const newComment = await Comment.create(req.body)

    res.status(201).send(newComment)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params

    const deletedComment = await Comment.deleteOne({ _id: commentId })

    if (!deletedComment) {
      return res
        .status(400)
        .json({ message: `The comment with id: ${commentId} was not found.` })
    }

    res.status(200).send(`The comment with id: ${commentId} has been deleted.`)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}
