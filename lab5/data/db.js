const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bank-simulator.db', (err) => {
  if (err) {
    console.error('Помилка підключення до бази даних:', err.message);
  } else {
    console.log('Успішно підключено до бази даних');
  }
});

module.exports = db;
