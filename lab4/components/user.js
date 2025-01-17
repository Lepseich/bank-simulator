const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

function getUserById(userId) {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    return users.find(user => user.id === userId);
}

module.exports = { getUserById };
