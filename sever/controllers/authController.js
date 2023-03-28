const bcrypt = require('bcrypt')
const User = require('../models/User')
const jwt = require('jsonwebtoken')

const authController = {

    //REGISTER  
    registerUser: async (req, res) => {
        const { username, password } = req.body
        // const  username = req.body.username
        // const  password = req.body.username

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing username or password"
            })
        }

        try {
            // Check for existing User
            const user = await User.findOne({ username })
            if (user) {
                return res.status(400).json({
                    success: false,
                    message: "Username is existing"
                })
            }

            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(password, salt)

            //create new User
            const newUser = await new User({
                username,
                password: hashed
            })
            await newUser.save()

            // Return token            
            const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_TOKEN)
            res.status(200).json({ newUser, accessToken })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal sever error."
            })
        }
    },

    //LOGIN
    loginUser: async (req, res) => {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing username or password"
            })
        }
        try {
            //check for existing user
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "Username or password is valid!"
                })
            }
            //Username found
            const passwordValid = await bcrypt.compare(password, user.password)
            if (!passwordValid) {
                return res.status(400).json({
                    success: false,
                    message: "Username or password is valid!"
                })
            }
            //All good
            const accessToken = jwt.sign({ userID: user._id }, process.env.JWT_TOKEN)
            return res.status(200).json({ user, accessToken })


        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal sever error."
            })
        }

    }
}

module.exports = authController;