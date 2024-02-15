// models/post.js
const fs = require('fs/promises');

const POSTS_FILE = '../blogs.json';

const getAllPosts = async () => {
    try {
        const data = await fs.readFile(POSTS_FILE, 'utf8');
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
};

const createPost = async (post) => {
    const posts = await getAllPosts();
    posts.push(post);
    await fs.writeFile(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf8');
};

// Implement other CRUD functions as needed

module.exports = { getAllPosts, createPost };
