const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    url: {
        type: String,
    },
    status: {
        type: String,
        value: ['TO LEARN', 'LEARNING', 'LEARNED'],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model("Post", PostSchema)