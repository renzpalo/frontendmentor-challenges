
// Inputs
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');

let trialForm = document.getElementById('trial-form');

// Error Message
console.log(firstName.parentNode.childNodes, 'load');

// Error Messages
// First Name cannot be empty
// Last Name cannot be empty
// Looks like this is not an email
// Password cannot be empty

// Data Validation
function validateNameInput(element, input) {
    let inputHasError = document.getElementById('first-name').classList.contains('.error-input');

    console.log(element.value, inputHasError);
    if (element.value == "" && !inputHasError) {
        element.insertAdjacentHTML('afterend', '<i class="error-message">' + input + ' cannot be empty</i>');
        element.insertAdjacentHTML('beforebegin', '<div class="error-icon"></div>');
        element.classList.add('error-input');

        console.log(element.value, inputHasError);
    } else if (element.value !== '' && element.value.length > 0) {
        element.classList.remove('error-input');

        console.log(element.value, inputHasError);
    }

    console.log(element.value, inputHasError);
    console.log(element.value, "Element value");
}

trialForm.addEventListener('submit', function(e) {
    

    validateNameInput(firstName, 'First Name');

    
    e.preventDefault();
});



















