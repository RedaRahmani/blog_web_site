const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/postRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
