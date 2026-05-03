const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const UserRoutes = require('./routes/userRoute')

app.use(express.json())
app.use('/user',UserRoutes)
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server Running ${PORT}`)
})