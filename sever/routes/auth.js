const authController = require('../controllers/authController');
const middlewareController = require('../controllers/middlewareControllers');
const router = require('express').Router();

// @route GET api/auth
// @des Check if user is login
// @access Public
router.get('/', middlewareController.verify, authController.accessToken)

// @route POST api/auth/register
// @des Register user
// @access Public
router.post('/register', authController.registerUser)

// @route POST api/auth/login
// @des Login user
//@access Public
router.post('/login', authController.loginUser)


module.exports = router