const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const UserRoutes = require('./routes/userRoute')
const AdminRoutes = require('./routes/adminRoute')

// connecting to backend
const cors = require('cors')
app.use(cors(
    {
        origin:"http://localhost:5173/"
    }
))
app.use(express.json())
app.use('/user',UserRoutes)
app.use('/admin',AdminRoutes)
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})