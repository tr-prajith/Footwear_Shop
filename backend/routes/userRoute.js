const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const UserMiddleware = require('../middlewares/userMiddleware')

router.post('/signup',UserController.registerUser)
router.post('/login',UserController.userLogin)
router.post('/forgot-password',UserController.forgotPassword)
router.post('/reset-password',UserController.resetPassword)
router.post('/update/:id',UserMiddleware,UserController.updateUser)
router.post('/delete/:id',UserMiddleware,UserController.deleteUser)

module.exports = router