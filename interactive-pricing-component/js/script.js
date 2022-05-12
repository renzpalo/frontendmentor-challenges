
const optionsRange = document.getElementById('pricing-options__range');
const optionsPriceValue = document.querySelector('.pricing-options__price-value');
const optionsPageviewValue = document.querySelector('.interactive_pricing__pageview-value');

const optionsToggle = document.getElementById('billing-options__toggle');

optionsRange.addEventListener('change', (event) => {
  let priceValue = parseInt(event.target.value) / 1000;
  let pageViewsValue = '';
  let priceDiscount = 0;

  if(optionsToggle.checked) {
    priceDiscount = 0.25;
  }

  if(priceValue <= 8) {
    pageViewsValue = '10K';
    priceValue = 8 - (8 * priceDiscount);
  } else if(priceValue > 8 && priceValue <= 12) {
    pageViewsValue = '50K';
    priceValue = 12 - (12 * priceDiscount);
  } else if(priceValue > 12 && priceValue <= 16) {
    pageViewsValue = '100K';
    priceValue = 16 - (16 * priceDiscount);
  } else if(priceValue > 16 && priceValue <= 24) {
    pageViewsValue = '500K';
    priceValue = 24 - (24 * priceDiscount);
  } else if(priceValue > 24 && priceValue <= 36) {
    pageViewsValue = '1M';
    priceValue = 36 - (36 * priceDiscount);
  }

  optionsPriceValue.textContent = `$${parseFloat(priceValue).toFixed(2)}`;
  optionsPageviewValue.textContent = pageViewsValue;
});

optionsToggle.addEventListener('change', (event) => {
  let optionsRangeValue = optionsRange.value;
  if(event.target.checked) {
    optionsRangeValue = (optionsRangeValue - (optionsRangeValue * 0.25)) / 1000;
  } else {
    optionsRangeValue = optionsRangeValue / 1000;
  }

  optionsPriceValue.textContent = `$${parseFloat(optionsRangeValue).toFixed(2)}`;
});