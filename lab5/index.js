const express = require('express');
const app = express();
const loginService = require('./services/login');
const dashboardService = require('./services/dashboard');

app.use(express.json());


const testUserId = 1; 

app.get('/login', (req, res) => {
  loginService.login(testUserId, (success, user) => {
    if (success) {
      res.status(200).json({ message: `Вхід успішний для користувача ${user.name}` });
    } else {
      res.status(404).json({ message: 'Користувач не знайдений' });
    }
  });
});

app.get('/dashboard', (req, res) => {
  dashboardService.getDashboard(testUserId, (transactions) => {
    res.status(200).json({ transactions });
  });
});

app.listen(3000, () => {
  console.log('Сервер запущений на порту 3000');
});
