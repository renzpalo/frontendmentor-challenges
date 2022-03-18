
const subscribeForm = document.getElementById('subscribe-form');
const searchEmail = document.getElementById('subscribe-email');
const searchSubmit = document.getElementById('subscribe-submit');

const emailErrorMessage = document.querySelector('.email-error-message');

function validateEmail(email) {
    if(email.value !== null && email.value == '') {
        searchEmail.classList.add('input-error');
        emailErrorMessage.style.display = 'block';
    } else {
        searchEmail.classList.remove('input-error');
        emailErrorMessage.style.display = 'none';

        return email;
    }
}

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateEmail(searchEmail);
})