import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'


//@desc  Fetch All Products
//@route  GET /api/product
//@access  Public Route
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}))

//@desc  Fetch Product by id
//@route  GET /api/product/:id
//@access  Public Route
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    }
    else {
        res.status(404)
        throw new Error('Product Not Found')
    }
}))

export default router