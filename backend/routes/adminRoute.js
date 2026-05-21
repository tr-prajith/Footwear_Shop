const express = require ('express')
const router = express.Router()
const ProductController = require('../controllers/adminController')
const AuthMiddleware = require ('../middlewares/authMiddleware')
const upload = require ('../middlewares/multer')


router.post('/add',AuthMiddleware,upload.single('image'),ProductController.createProduct)
router.get('/show',AuthMiddleware,ProductController.showProduct)
router.put('/update/:id',AuthMiddleware,ProductController.updateProduct)
router.delete('/delete/:id',AuthMiddleware,ProductController.deleteProduct)

module.exports = router
