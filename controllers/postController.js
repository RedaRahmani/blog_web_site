const Post = require('../models/post');

const getAllPosts = (req, res) => {
  const posts = Post.getAllPosts();
  res.json(posts);
};

const getPostById = (req, res) => {
  const postId = req.params.id;
  const post = Post.getPostById(postId);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
};

const createPost = (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: Date.now().toString(),
    title,
    content
  };
  Post.createPost(newPost);
  res.status(201).json({ message: 'Post created successfully', post: newPost });
};

const updatePost = (req, res) => {
  const postId = req.params.id;
  const updatedPost = req.body;
  const isUpdated = Post.updatePost(postId, updatedPost);
  if (isUpdated) {
    res.json({ message: 'Post updated successfully' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

const deletePost = (req, res) => {
  const postId = req.params.id;
  Post.deletePost(postId);
  res.json({ message: 'Post deleted successfully' });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
