const transactions = require('../data/transactions');

function getDashboard(userId, callback) {
  transactions.getTransactionsByUserId(userId, (transactions) => {
    callback(transactions);
  });
}

module.exports = { getDashboard };
