// controllers/postController.js
const { getAllPosts, createPost } = require('../models/post');

const getAllPostsController = async (req, res) => {
    const posts = await getAllPosts();
    res.json(posts);
};

const createPostController = async (req, res) => {
    const newPost = req.body;
    await createPost(newPost);
    res.status(201).json({ message: 'Post created successfully' });
};

// Implement other CRUD functions as needed

module.exports = { getAllPostsController, createPostController };
