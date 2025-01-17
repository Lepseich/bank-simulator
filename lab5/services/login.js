const { users } = require('../data/users');

function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    return user ? user : null;
}

module.exports = { login };
