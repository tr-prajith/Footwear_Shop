const express = require ('express')
const router = express.Router()
const ProductController = require('../controllers/productController')

router.post('/add',ProductController.createProduct)
router.get('/show',ProductController.showProduct)
router.put('/update/:id',ProductController.updateProduct)
router.delete('/delete/:id',ProductController.deleteProduct)

module.exports = router
