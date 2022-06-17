const password = document.getElementById('password');
const confirmedPassowrd = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const message = document.getElementById('message');


form.addEventListener('submit', (e) => {
    if (password.value != confirmedPassowrd.value) {
        e.preventDefault()
        errorColor();
        errorMessage();
    }
})

function errorColor () {
    password.style.borderColor='red';
    confirmedPassowrd.style.borderColor='red';
};

function errorMessage () {
    message.innerText = "Passwords do not match. Please try again."
}