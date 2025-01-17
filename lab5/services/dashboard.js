const { transactions } = require('../data/transactions');

function showDashboard(userId) {
    console.log(`Welcome to the dashboard, user ${userId}!`);
    const userTransactions = transactions.filter(t => t.userId === userId);
    console.log('Your transactions:', userTransactions);
}

module.exports = { showDashboard };
