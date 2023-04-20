// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     username: {
//         type: String,
//         require: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         require: true,
//     },
// },
//     { timestamps: true }
// )

// module.exports = mongoose.model('users', userSchema)

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("users", userSchema)