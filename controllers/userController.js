// controllers/userController.js
const { getAllUsers, createUser, updateUser, deleteUser } = require('../models/user');

// ...

const updateUserController = async (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;

    await updateUser(userId, updatedUser);
    res.json({ message: 'User updated successfully' });
};

const deleteUserController = async (req, res) => {
    const userId = req.params.id;
    await deleteUser(userId);
    res.json({ message: 'User deleted successfully' });
};

module.exports = { getAllUsersController, createUserController, updateUserController, deleteUserController };
