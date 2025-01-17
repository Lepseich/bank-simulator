const fs = require('fs');
const path = require('path');

const transactionsFilePath = path.join(__dirname, '../data/transactions.json');

function getTransactionsForAccount(accountId) {
    const transactions = JSON.parse(fs.readFileSync(transactionsFilePath, 'utf8'));
    return transactions.filter(transaction => transaction.accountId === accountId);
}

module.exports = { getTransactionsForAccount };
