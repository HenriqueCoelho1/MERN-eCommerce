import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'



//@desc  Fetch All Products
//@route  GET /api/product
//@access  Public Route
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})


//@desc  Fetch Product by id
//@route  GET /api/product/:id
//@access  Public Route
const getProductsById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(400)
        throw new Error('Product not Found')
    }
})



export { getProducts, getProductsById }