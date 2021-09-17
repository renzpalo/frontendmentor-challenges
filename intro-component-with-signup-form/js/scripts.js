
// Inputs
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');

let trialForm = document.getElementById('trial-form');

// Error Messages
// First Name cannot be empty
// Last Name cannot be empty
// Looks like this is not an email
// Password cannot be empty

// Data Validation
function validateNameInput(element, input) {
    let inputHasError = element.classList.contains('error-input');

    if (element.value == "" && !inputHasError) {
        generateErrorMessage(element, input, 'cannot be empty.');
    } else if (element.value !== "") {
        if (inputHasError) {
            removeErrorMessage(element);
        }
    }
}

function validateEmail() {
    let inputHasError = email.classList.contains('error-input');

    if (email.value == "" && !inputHasError) {
        generateErrorMessage(email, 'Looks like this is not an', 'email.');
    } else if (email.value !== "") {
        if (inputHasError) {
            removeErrorMessage(email);
        }
    }
}

function validatePassword() {
    let inputHasError = password.classList.contains('error-input');

    if (password.value == "" && !inputHasError) {
        generateErrorMessage(password, 'Password', 'cannot be empty.');
    } else if (password.value.length < 8 && !inputHasError) {    
        generateErrorMessage(password, 'Password', 'must contain 8 characters.');
    } else if (password.value !== "" && password.value.length >= 8) {
        if (inputHasError) {
            removeErrorMessage(password);
        }
    }
}

function removeErrorMessage(element) {
    element.classList.remove('error-input');
    element.parentNode.removeChild(document.querySelector('.error-message'));
    element.parentNode.removeChild(document.querySelector('.error-icon'));
}

function generateErrorMessage(element, input, message) {
    element.insertAdjacentHTML('afterend', '<i class="error-message">' + input + ' ' + message + '</i>');
    element.insertAdjacentHTML('beforebegin', '<div class="error-icon"></div>');
    element.classList.add('error-input');
}

trialForm.addEventListener('submit', function(e) {
    validateNameInput(firstName, 'First Name');
    validateNameInput(lastName, 'Last Name');
    validateEmail();
    validatePassword();
    
    e.preventDefault();
});



















