const express = require ('express')
const router = express.Router()
const CartController = require('../controllers/cartController')
const AuthMiddleware = require('../middlewares/authMiddleware')

router.post('/add-cart',AuthMiddleware,CartController.addToCart)
router.get('/count',AuthMiddleware,CartController.cartCount)
router.get('/get-cart', AuthMiddleware, CartController.getCart)

module.exports = router