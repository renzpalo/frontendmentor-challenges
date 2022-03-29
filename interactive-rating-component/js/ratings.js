
const ratingNumbers = document.querySelectorAll('.rating-radio');
const ratingForm = document.querySelector('.rating-form');

const ratingRate = document.querySelector('.rating-rate');
const ratingThankYou = document.querySelector('.rating-thank-you');

const ratingScore = document.getElementById('rating-score');

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    ratingNumbers.forEach(ratingNumber => {
        if(ratingNumber.checked) {
            if(ratingRate.style.display !== 'none') {
                ratingRate.style.display = 'none';
                ratingThankYou.style.display = 'flex';

                ratingScore.textContent = ratingNumber.value;
            } else {
                ratingThankYou.style.display = 'none';
                ratingRate.style.display = 'block';
            }
        }
    });
});