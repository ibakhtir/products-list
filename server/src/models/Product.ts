import mongoose from "mongoose"

const { model, models, Schema } = mongoose

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    count: { type: Number, required: true },
    weight: { type: String, required: true },
    size: {
      width: { type: Number, required: true },
      height: { type: Number, required: true }
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  },
  {
    timestamps: true
  }
)

const Product = models.Product || model("Product", productSchema)

export default Product
