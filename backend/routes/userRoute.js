const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.post('/signup',UserController.registerUser)
router.post('/login',UserController.userLogin)
router.post('/forgot-password',UserController.forgotPassword)
router.post('/reset-password',UserController.resetPassword)

module.exports = router