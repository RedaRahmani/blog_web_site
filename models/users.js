// models/user.js
// ...

const updateUser = async (userId, updatedUser) => {
    const users = await getAllUsers();
    const index = users.findIndex(user => user.id === userId);

    if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    }
};

const deleteUser = async (userId) => {
    const users = await getAllUsers();
    const updatedUsers = users.filter(user => user.id !== userId);
    await fs.writeFile(USERS_FILE, JSON.stringify(updatedUsers, null, 2), 'utf8');
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
