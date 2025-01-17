const db = require('./db');


function getTransactionsByUserId(userId, callback) {
  const query = 'SELECT * FROM transactions WHERE user_id = ?';
  db.all(query, [userId], (err, rows) => {
    if (err) {
      console.error('Помилка при отриманні транзакцій:', err.message);
    }
    callback(rows);
  });
}

module.exports = { getTransactionsByUserId };
