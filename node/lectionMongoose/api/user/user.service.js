const User = require('../../dataBase/User');

module.exports = {
    getAllUsers: async () => {
        const users = await User.find();
        
        if (users.length === 0) {
            throw new Error('Users is not found');
        }
        return users;
    },

    getUserById: async (userId) => {
        const user = await User.findById(userId);

        if (user.length === 0) {
            throw new Error('User is not found');
        }
        return user;
    },

    createUser: async (userObject) => {
        return await User.create(userObject);
    },

    updateUserById: async (userId, user) => {
        const index = userId - 1;

        if (users[index]) {
            console.log(!isUpdateUser(user.name, user.age, userId))
            if (!isUpdateUser(user.name, user.age, userId)) {
                users[index] = user;
            
                await fs.writeFile('./dataBase/users.json', JSON.stringify(users));
                
                return user;
            } else {
                throw new Error('User not updated');
            }
        } else {
            throw new Error('User not found');
        }
    },

    deleteUserById: async (userId) => {
        const index = userId - 1;

        if (users[index]) {
            const deletedUser = users.splice(index, 1)[0];

            await fs.writeFile('./dataBase/users.json', JSON.stringify(users));

            return deletedUser;
        } else {
            throw new Error('User not found');
        }
    }
}
