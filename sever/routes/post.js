
const router = require('express').Router()

const postController = require('../controllers/postsControllers')
const middlewareController = require('../controllers/middlewareControllers')

// @route POST api/posts
// @des Create post
// @access Private
router.post('/', middlewareController.verify, postController.createPost)

// @route GET api/posts
// @des Get post
// @access Private
router.get('/', middlewareController.verify, postController.getPosts)

// @route PUT api/posts/up-date
// @des Get post
// @access Private
router.put('/:id', middlewareController.verify, postController.updatePost)

// @route DELETE api/posts/up-date
// @des Delete post
// @access Private
router.delete('/:id', middlewareController.verify, postController.deletePost)

module.exports = router

