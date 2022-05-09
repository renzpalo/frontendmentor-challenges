
const optionsRange = document.getElementById('pricing-options__range');
const optionsPriceValue = document.querySelector('.pricing-options__price-value');
const optionsPageviewValue = document.querySelector('.interactive_pricing__pageview-value');

const optionsToggle = document.getElementById('billing-options__toggle');

optionsRange.addEventListener('change', (event) => {
  let priceValue = parseInt(event.target.value);
  let pageViewsValue = '';

  if(priceValue <= 8) {
    pageViewsValue = '10K';
  } else if(priceValue > 8 && priceValue <= 12) {
    pageViewsValue = '50K';
  } else if(priceValue > 12 && priceValue <= 16) {
    pageViewsValue = '100K';
  } else if(priceValue > 16 && priceValue <= 24) {
    pageViewsValue = '500K';
  } else if(priceValue > 24 && priceValue <= 36) {
    pageViewsValue = '1M';
  }

  optionsPriceValue.textContent = `$${parseFloat(priceValue).toFixed(2)}`;
  optionsPageviewValue.textContent = pageViewsValue;
});

optionsToggle.addEventListener('change', (event) => {
  let optionsRangeValue = optionsRange.value;
  if(event.target.checked) {
    optionsRangeValue = optionsRangeValue * 0.25;
    
  } else {
    optionsRangeValue = optionsRangeValue;
  }

  optionsPriceValue.textContent = `$${parseFloat(optionsRangeValue).toFixed(2)}`;
});
