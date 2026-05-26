const mongoose = require('mongoose')
const User = require('./userModel')


const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    products: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        quantity: {
            type: Number,
            default:1
        },
        size: {
            type: Number,
            required: true
        }
    }]
}, { timestamps: true })

const Cart = mongoose.model('cart', cartSchema)
module.exports = Cart