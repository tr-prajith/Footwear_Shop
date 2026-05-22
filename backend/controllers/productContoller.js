const Products = require('../models/productModel')


const homeProduct = async (req,res) =>{
    try{
        const showData =await Products.find().sort({createdAt: -1})
        res.status(200).json({msg:"All products",data:showData,success:true})
    }catch(error){
        res.status(500).json({msg:"Unable to fetch products, Please try again later"})
    }
}

module.exports = {homeProduct}