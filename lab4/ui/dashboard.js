const { getAccountsForUser } = require('../components/bankAccount');
const { getTransactionsForAccount } = require('../components/transaction');

function showDashboard(userId) {
    const accounts = getAccountsForUser(userId);
    accounts.forEach(account => {
        console.log(`Account ID: ${account.accountId}, Balance: $${account.balance}`);
        const transactions = getTransactionsForAccount(account.accountId);
        transactions.forEach(transaction => {
            console.log(`Transaction ID: ${transaction.transactionId}, Type: ${transaction.type}, Amount: $${transaction.amount}`);
        });
    });
}

module.exports = { showDashboard };
