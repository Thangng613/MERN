const argon2 = require('argon2')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authController = {

    //REGISTER  
    registerUser: async (req, res) => {
        const { username, password, confirmPassword } = req.body

        // Simple validation
        if (!username || !password)
            return res
                .status(400)
                .json({ success: false, message: 'Missing username and/or password' })

        try {
            // Check for existing user
            const user = await User.findOne({ username })

            if (user)
                return res
                    .status(400)
                    .json({ success: false, message: 'Username already taken' })

            if (password !== confirmPassword) {
                return res.json({
                    success: false,
                    message: 'Password do not match'
                })
            }

            // All good
            const hashedPassword = await argon2.hash(password)
            const newUser = new User({ username, password: hashedPassword })
            await newUser.save()

            // Return token
            const accessToken = jwt.sign(
                { userId: newUser._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1d' }
            )

            res.json({
                success: true,
                message: 'User created successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },

    //LOGIN
    loginUser: async (req, res) => {
        const { username, password } = req.body

        // Simple validation
        if (!username || !password)
            return res
                .status(400)
                .json({ success: false, message: 'Missing username and/or password' })

        try {
            // Check for existing user
            const user = await User.findOne({ username })
            if (!user)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password' })

            // Username found
            const passwordValid = await argon2.verify(user.password, password)
            if (!passwordValid)
                return res
                    .status(400)
                    .json({ success: false, message: 'Incorrect username or password' })

            // All good
            // Return token
            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1d' }
            )

            res.json({
                success: true,
                message: 'User logged in successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }

    },

    //GET access token 
    accessToken: async (req, res) => {
        try {
            const user = await User.findById(req.userId).select('-password')
            if (!user)
                return res.status(400).json({ success: false, message: 'User not found' })
            res.json({ success: true, user })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }

    }
}

module.exports = authController;