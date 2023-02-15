import mongoose from "mongoose"

const { model, models, Schema } = mongoose

const commentSchema = new Schema(
  {
    description: { type: String, required: true },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Comment = models.Comment || model("Comment", commentSchema)

export default Comment
