const fs = require('fs');
const path = require('path');
const postsFilePath = path.resolve(__dirname, '../blogs.json');

const getAllPosts = () => {
  const postsData = fs.readFileSync(postsFilePath);
  return JSON.parse(postsData);
};

const getPostById = (id) => {
  const postsData = fs.readFileSync(postsFilePath);
  const posts = JSON.parse(postsData);
  return posts.find(post => post.id === id);
};

const createPost = (post) => {
  const postsData = fs.readFileSync(postsFilePath);
  const posts = JSON.parse(postsData);
  posts.push(post);
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};

const updatePost = (id, updatedPost) => {
  const postsData = fs.readFileSync(postsFilePath);
  let posts = JSON.parse(postsData);
  const index = posts.findIndex(post => post.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedPost };
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
    return true;
  }
  return false;
};

const deletePost = (id) => {
  const postsData = fs.readFileSync(postsFilePath);
  let posts = JSON.parse(postsData);
  const filteredPosts = posts.filter(post => post.id !== id);
  fs.writeFileSync(postsFilePath, JSON.stringify(filteredPosts, null, 2));
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
