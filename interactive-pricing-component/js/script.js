
const optionsRange = document.getElementById('pricing-options__range');
const optionsPriceValue = document.querySelector('.pricing-options__price-value');

optionsRange.addEventListener('change', (event) => {
  console.log(event.target.value);

  optionsPriceValue.textContent = `$${parseFloat(event.target.value).toFixed(2)}`;
});
