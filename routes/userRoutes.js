// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getAllUsersController, createUserController } = require('../controllers/userController');

router.get('/users', getAllUsersController);
router.post('/users', createUserController);
// routes/userRoutes.js
const { getAllUsersController, createUserController, updateUserController, deleteUserController } = require('../controllers/userController');

router.get('/users', getAllUsersController);
router.post('/users', createUserController);
router.put('/users/:id', updateUserController);
router.delete('/users/:id', deleteUserController);

module.exports = router;
