const authController = require('../controllers/authController')
const router = require('express').Router();


// @route POST api/auth/register
// @des Register user
// @access Public
router.post('/register', authController.registerUser)

// @route POST api/auth/login
// @des Login user
//@access Public
router.post('/login', authController.loginUser)


module.exports = router