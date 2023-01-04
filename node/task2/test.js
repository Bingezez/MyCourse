const users = require('./dataBase/users.json');

const isUserExist = (id) => users.some((user) => user);

console.log(isUserExist(1));