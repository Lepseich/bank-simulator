const db = require('./db');


function getUserById(userId, callback) {
  const query = 'SELECT * FROM users WHERE id = ?';
  db.get(query, [userId], (err, row) => {
    if (err) {
      console.error('Помилка при отриманні користувача:', err.message);
    }
    callback(row);
  });
}

module.exports = { getUserById };
