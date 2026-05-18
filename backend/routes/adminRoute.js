const express = require ('express')
const router = express.Router()
const ProductController = require('../controllers/adminController')
const AuthMiddleware = require ('../middlewares/authMiddleware')


router.post('/add',AuthMiddleware,ProductController.createProduct)
router.get('/show',AuthMiddleware,ProductController.showProduct)
router.put('/update/:id',AuthMiddleware,ProductController.updateProduct)
router.delete('/delete/:id',AuthMiddleware,ProductController.deleteProduct)

module.exports = router
