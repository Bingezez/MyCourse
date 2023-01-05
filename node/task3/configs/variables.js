const username = 'admin';
const password = 'admin';
const cluster = 'cluster0';
const dbName = 'database';

module.exports = {
    PORT: process.env.PORT || 5050,
    URI: process.env.URI || `mongodb+srv://${username}:${password}@${cluster}.jwt5ndr.mongodb.net/${dbName}?retryWrites=true&w=majority`
}