const Cart = require('../models/cartModel')

const addToCart = async(req, res) =>{
    try{
        console.log(req.body)
        const {productId, quantity, size} = req.body 
        const userId = req.user.id
        let cart = await Cart.findOne({userId})

        if(!cart){
            cart = new Cart({
                userId,
                products:[]
            })
        }

        // checking same prosuct and same size already exists
        const existingProduct =cart.products.find(
            (item) =>
                item.productId.toString() === productId &&
            item.size === size
        )

        // if product exists increase the quantity
        if(existingProduct){
            existingProduct.quantity += quantity
        }else{

            // Add new product
            cart.products.push({
                productId,quantity,size
            })
        }
        await cart.save()

        return res.status(200).json({msg:"Product added to cart", data:cart, success: true})

    }catch(error){
        console.log(error)
        return res.status(500).json({msg:"Unable to add product to cart",error})
    }
}

// Cart Count
const cartCount = async(req, res) => {
    try{
        const userId = req.user.id
        const cart = await Cart.findOne({userId})

        if(!cart){
            return res.status(200).json({ success:true, count: 0})
        }


        let totalCount = 0
        cart.products.forEach((item) => {
            totalCount += item.quantity
        })

        return res.status(200).json({success:true, count: totalCount})
    }catch(error){
        console.log(error);
        
        return res.status(500).json({msg:"unable to fetch cart count",error})
    }   
}

module.exports = {addToCart, cartCount}