const { login } = require('./services/login');
const { showDashboard } = require('./services/dashboard');

// Статичні дані для авторизації
const userEmail = 'john@example.com';
const userPassword = '1234';

// Авторизація
const user = login(userEmail, userPassword);
if (user) {
    console.log('Login successful!');
    // Показуємо dashboard для авторизованого користувача
    showDashboard(user.id);
} else {
    console.log('Invalid email or password.');
}
