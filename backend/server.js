import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()


app.get('/', (req, res) => {
    res.send('Api is running')
})

app.use('/api/products/', productRoutes)

//Middleware
app.use(errorHandler)
app.use(notFound)



const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))