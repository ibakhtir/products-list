import { Request, Response } from "express"

import Product from "../models/Product"

export const getAllProducts = async (_: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ name: 1, count: -1 })

    res.status(200).send(products)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body)

    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      req.body,
      {
        new: true
      }
    )

    if (!updatedProduct) {
      return res
        .status(400)
        .json({ message: `The product with id: ${productId} was not found.` })
    }

    res.status(200).send(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const deletedProduct = await Product.deleteOne({ _id: productId })

    if (!deletedProduct) {
      return res
        .status(400)
        .json({ message: `The product with id: ${productId} was not found.` })
    }

    res.status(200).send(`The product with id: ${productId} has been deleted.`)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}
