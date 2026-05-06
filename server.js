const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const UserRoutes = require('./routes/userRoute')
const ProductRoutes = require('./routes/productRoute')

app.use(express.json())
app.use('/user',UserRoutes)
app.use('/product',ProductRoutes)
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})