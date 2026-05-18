const Products = require('../models/productModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// Admin Login
const adminLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const admin = await User.findOne({ email })
        if (!admin) {
           return res.status(404).json({ msg: "Admin not found" })
        }

        if( admin.role !== "admin"){
            res.status(403).json({msg: "Access Denied"})
        }

        const matchPassword = await bcrypt.compare(password, admin.password)
        if (!matchPassword) {
           return res.status(401).json({ msg: " Invalid Credentials " })
        }

        const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.status(200).json({ msg: "Admin Login Successfull", token: token, success: true })
    } catch (error) {
        res.status(500).json({ msg: "Admin Login failed" })
        console.log(error);
        
    }
}


// Create Product
const createProduct = async (req, res) => {
    const { name, brand, price, description, sizes, stock, image } = req.body
    try {


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
        res.status(200).json({ msg: "All Products", data: showData })
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

module.exports = { adminLogin, createProduct, showProduct, updateProduct, deleteProduct  }