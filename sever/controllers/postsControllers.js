const Post = require("../models/Post")
const jwt = require('jsonwebtoken')


const postController = {
    // Posts
    createPost: async (req, res) => {
        const { title, description, url, status } = req.body

        // Simple validation 
        if (!title) {
            return res.status(400).json({
                success: false,
                message: " Title is require."
            })
        }
        try {
            // const user = await User.findOne({ username })
            const newPost = new Post({
                title,
                description,
                url: url.startsWith('https://') ? url : `https://${url}`,
                status: status || 'TO LEARN',
                user: req.userId
            })

            await newPost.save()

            res.status(200).json({
                success: true,
                message: "Create is successfully!",
                post: newPost
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal sever error."
            })
        }
    },

    //GET 
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find().populate('user', '-password')
            res.json({
                success: true,
                posts,
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal sever error."
            })
        }
    },
    getAPost: async (req, res) => {
        const getAPostCondition = req.params.id
        if (!getAPostCondition) {
            return res.status(401).json({
                success: false,
                message: "Post not found or user not authorized."
            })
        }
        try {
            const post = await Post.findById(getAPostCondition)
            res.json({
                success: true,
                post
            })
        } catch (error) {

        }
    },

    // UPDATE
    updatePost: async (req, res) => {
        const { title, description, url, status } = req.body

        // Simple validation 
        if (!title) {
            return res.status(400).json({
                success: false,
                message: " Title is require."
            })
        }
        try {
            let updatedPost = {
                title,
                description: description || '',
                url: url.startsWith('https://') ? url : `https://${url}` || '',
                status: status || 'TO LEARN'
            }

            const postUpdateCondition = { _id: req.params.id, user: req.userId }

            updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, { new: true })

            //User not authorized to update post
            if (!updatedPost) {
                return res.status(401).json({
                    success: true,
                    message: "Post not found or user not authorized"
                })
            }

            res.status(200).json({
                success: true,
                message: "Update Post is successfully!",
                post: updatedPost
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal sever error."
            })
        }
    },

    //DELETE
    deletePost: async (req, res) => {
        try {
            const postDeleteCondition = { _id: req.params.id, user: req.userId }
            const deletePost = await Post.findOneAndDelete(postDeleteCondition)

            //User not authorized or post not found 
            if (!postDeleteCondition) {
                return res.status(401).json({
                    success: false,
                    message: "Post not found or user not authorized."
                })
            }
            res.json({
                success: true,
                message: 'Delete successfully!',
                post: deletePost
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal sever error."
            })
        }
    }

}

module.exports = postController