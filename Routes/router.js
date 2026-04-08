const express = require('express')
const userController = require('../controller/userController')
const router = new express.Router()
const bookController = require('../controller/bookController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerMiddleware = require('../middleware/multerMiddleware')

// register
router.post('/register', userController.registerController)

// login
router.post('/login', userController.loginController)

// google-login
router.post('/google-login', userController.googleLoginController)
// ---------- Authorized users routes ----------
// addBook
router.post('/user/add-book', jwtMiddleware, multerMiddleware.array('uploadImg', 2), bookController.addBookController)

module.exports = router