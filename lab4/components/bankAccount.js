const fs = require('fs');
const path = require('path');

const accountsFilePath = path.join(__dirname, '../data/accounts.json');

function getAccountsForUser(userId) {
    const accounts = JSON.parse(fs.readFileSync(accountsFilePath, 'utf8'));
    return accounts.filter(account => account.userId === userId);
}

module.exports = { getAccountsForUser };
