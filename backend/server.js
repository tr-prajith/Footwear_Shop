const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
const UserRoutes = require('./routes/userRoute')
const AdminRoutes = require('./routes/adminRoute')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// without this image wont appear in browser
app.use('uploads', express.static('uploads'))
// connecting to backend
app.use(cookieParser())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
app.use(express.json())
app.use('/user',UserRoutes)
app.use('/admin',AdminRoutes)
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})