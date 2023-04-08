const mongoose = require('mongoose')

const refreshTokenSchema = new mongoose.Schema({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        unique: true
    }
})

module.exports = mongoose.model('refreshToken', refreshTokenSchema)