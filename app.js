// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware and routes will go here
// app.js
const postRoutes = require('./routes/postRoutes');
// app.js
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', blogRoutes);

app.use(express.json());
app.use('/api', postRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
