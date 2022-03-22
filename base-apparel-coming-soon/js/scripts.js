const subscribeForm = document.querySelector('.form-subscribe');
const subscribeInput = document.querySelector('#subscribe-email');
const errorMessageText = document.querySelector('.error-message');
const subscribeErrorIcon = document.querySelector('#subscribe-error-icon');

const validateEmail = (email) => {
    let errorMessage = '';

    if(email.value == null || email.value == '') {
        errorMessage = "Email cannot be empty.";

        errorMessageText.textContent = errorMessage;
        errorMessageText.style.display = 'block';
        subscribeErrorIcon.style.display = 'block';
        subscribeInput.classList.add('error-input');

    } else if(!email.value.includes('@') || !email.value.includes('.')) {
        errorMessage = "Please provide a valid email";

        errorMessageText.textContent = errorMessage;
        errorMessageText.style.display = 'block';
        subscribeErrorIcon.style.display = 'block';
        subscribeInput.classList.add('error-input');
    } else {
        errorMessageText.textContent = errorMessage;
        errorMessageText.style.display = 'none';
        subscribeErrorIcon.style.display = 'none';
        subscribeInput.classList.remove('error-input');
    }
}

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateEmail(subscribeInput);
});