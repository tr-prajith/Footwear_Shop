const mongoose =  require('mongoose')
require('dotenv').config()

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB COnnected");
        
    } catch (error) {
        console.log("Error in connecting MongoDB");
        
    }
}

module.exports = connectDB