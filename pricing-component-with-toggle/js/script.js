const subscriptionOptionsToggle = document.getElementById('subscription-options-toggle');

const pricingPrices = [
    ['$19.99', '$199.99'],
    ['$24.99', '$249.99'],
    ['$39.99', '$399.99']
];

// Pricing Options
const pricingCards = document.querySelectorAll('.pricing-card .pricing-price');

// Toggle from Anually to Monthly vice versa.
subscriptionOptionsToggle.addEventListener('click', (e) => {
    if(e.target.checked) {
        pricingCards.forEach((pricingCardPrice, index) => {
            pricingCardPrice.textContent = pricingPrices[index][0];
            pricingCardPrice.style.animation = '.4s fadeIn linear';
        });
    } else {
        pricingCards.forEach((pricingCardPrice, index) => {
            pricingCardPrice.textContent = pricingPrices[index][1];
            
            pricingCardPrice.style.animation = '.4s fadeInOut linear';
        });
    }
});