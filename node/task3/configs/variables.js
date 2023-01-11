const username = 'admin';
const password = 'admin';
const cluster = 'cluster0';
const dbName = 'database';

module.exports = {
    PORT: process.env.PORT || 5051,
    URL: process.env.URL || `mongodb+srv://${username}:${password}@${cluster}.jwt5ndr.mongodb.net/${dbName}?retryWrites=true&w=majority`
};
