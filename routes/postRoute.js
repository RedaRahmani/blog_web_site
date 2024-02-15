// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const { getAllPostsController, createPostController } = require('../controllers/postController');

router.get('/posts', getAllPostsController);
router.post('/posts', createPostController);

// Define other routes as needed

module.exports = router;
