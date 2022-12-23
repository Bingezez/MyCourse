const users = require('../../dataBase/users.json');

const fs = require('fs').promises;

// if this user by name and age
const isUser = (name, age) => {
    return users.some(user => user.name === name && user.age === age);
}

const isUpdateUser = (name, age, id) => {
    return users.some(user => user.name === name && user.age === age && user.id !== id);
}

module.exports = {
    getAllUsers: () => {
        if (!users) {
            return [];
        }
        return users;
    },

    getUserById: async (userId) => {
        const user = users[userId - 1];

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    },
    
    createUser: async (user) => {
        if (!isUser(user.name, user.age)) {
            users.push(user);

            await fs.writeFile('./dataBase/users.json', JSON.stringify(users));

            return user;
        } else {
            throw new Error('User not created');
        }
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