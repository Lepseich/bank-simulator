const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

function authenticate(email, password) {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        return user;
    }
    return null;
}

module.exports = { authenticate };
