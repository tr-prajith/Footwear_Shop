const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String },
    price: { type: Number, required: true },
    description: { type: String, },
    sizes: [{ type: Number }],
    stock: { type: Number, default: 0 },
    images: [{ type: String}]

},{timestamps:true})

const Products = mongoose.model('product',productSchema)
module.exports = Products