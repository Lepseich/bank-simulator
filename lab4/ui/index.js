const { login } = require('./ui/login');
const { showDashboard } = require('./ui/dashboard');


const userEmail = 'john@example.com';
const userPassword = '1234';


const user = login(userEmail, userPassword);
if (user) {
    console.log('Авторизація пройшла успішно!');

    showDashboard(user.id);
} else {
    console.log('Невірні дані для входу');
}
