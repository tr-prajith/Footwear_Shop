const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const AuthMiddleware = require('../middlewares/authMiddleware')

router.post('/signup',UserController.registerUser)
router.post('/login',UserController.userLogin)
router.post('/forgot-password',UserController.forgotPassword)
router.post('/reset-password',UserController.resetPassword)
router.post('/update/:id',AuthMiddleware,UserController.updateUser)
router.post('/delete/:id',AuthMiddleware,UserController.deleteUser)

module.exports = router