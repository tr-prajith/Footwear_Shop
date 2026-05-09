const express = require ('express')
const router = express.Router()
const ProductController = require('../controllers/adminController')
const AdminMiddleware = require('../middlewares/adminMiddleware')

router.post('/login',ProductController.adminLogin)
router.post('/add',AdminMiddleware,ProductController.createProduct)
router.get('/show',AdminMiddleware,ProductController.showProduct)
router.put('/update/:id',AdminMiddleware,ProductController.updateProduct)
router.delete('/delete/:id',AdminMiddleware,ProductController.deleteProduct)

module.exports = router
