import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'



//@desc  Create New ORder
//@route  POST /api/orders
//@access  private Route
const addOrderItem = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body

    if (orderItems && orderItems === 0) {
        res.status(400)
        throw new Error('No order Items')
        return
    } else {
        const order = new Order({
            orderItems, shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }


    res.json(products)
})


export { addOrderItem }