// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const { getAllBlogsController, createBlogController } = require('../controllers/blogController');

router.get('/blogs', getAllBlogsController);
router.post('/blogs', createBlogController);

module.exports = router;
