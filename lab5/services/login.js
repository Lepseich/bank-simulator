const users = require('../data/users');

function login(userId, callback) {
  users.getUserById(userId, (user) => {
    if (user) {
      callback(true, user);
    } else {
      callback(false, null);
    }
  });
}

module.exports = { login };
