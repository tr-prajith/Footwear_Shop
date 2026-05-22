const Products = require('../models/productModel')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const User = require('../models/userModel')



// Using Multer to add image

// Create Product
const createProduct = async (req, res) => {
    const { name, brand, price, description, sizes, stock } = req.body
    try {

        const image = req.file.filename
        const newProduct = new Products({
            name, brand, price, description, sizes, stock, image
        })
        await newProduct.save()
        res.status(201).json({ msg: "Item Created Successfully", data: newProduct, success:true })
    } catch (error) {
        res.status(500).json({ msg: "Product not added", error })
        console.log(error);
        
    }
}


// Show the Product(get)
const showProduct = async (req, res) => {
    try {
        const showData = await Products.find().sort({ createdAt: -1 })
        res.status(200).json({ msg: "All Products", data: showData, success:true })
    } catch (error) {
        res.status(500).json({ msg: "Unable to fetch products, Please try again later.", error })
    }
}

// Update Product details
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const updateData = await Products.findByIdAndUpdate(id, req.body, { new: true })
        if (!updateData) {
            res.status(404).json({ msg: "Product not found" })
        }
        res.status(200).json({ msg: "Product updated successfully" })
    } catch (error) {
        res.status(500).json({ msg: "Unable to update the product. Please try again later.", error })
    }
}

// Delete the product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deleteData = await Products.findByIdAndDelete(id)
        if (!deleteData) {
            res.status(404).json({ msg: "Product Not Found" })
        }
        res.status(200).json({ msg: "Product Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ msg: "Unable to delete the product. Please try again later.", error })
    }
}

module.exports = {  createProduct, showProduct, updateProduct, deleteProduct  }