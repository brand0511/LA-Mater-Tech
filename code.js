let loginForm = document.querySelector('.container .body .form.loginForm');

document.querySelector('login').onclick = () => {
    loginForm.classList.toggle('login');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('login');
}