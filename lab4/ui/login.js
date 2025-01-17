const { authenticate } = require('../components/auth');

function login(email, password) {
    const user = authenticate(email, password);
    if (user) {
        console.log('Login successful:', user);
    } else {
        console.log('Invalid credentials');
    }
}

module.exports = { login };
