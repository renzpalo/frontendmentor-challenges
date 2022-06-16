const adviceId = document.querySelector('.advice__id');
const adviceQuote = document.querySelector('.advice__quote');
const adviceGenerator = document.querySelector('.advice-generator');

const adviceDiceRoll = document.getElementById('advice__dice-roll');

// Prevent generating on fast clicks
let currentAdviceId;

// Await
async function asyncGetQuote() {
  adviceGenerator.classList.add('on-load');

  try {
    const result = await fetch('https://api.adviceslip.com/advice');
    const data = await result.json();

    generateQuote(data, true);
  } catch(error) {
    generateQuote(null, false);
  }
}


// Generate quote to DOM
const generateQuote = (quote, isSuccess) => {
  if(isSuccess && quote.slip.id !== currentAdviceId) {
    adviceId.textContent = 'Advice #' + quote.slip.id;
    adviceQuote.textContent = `\u201C${quote.slip.advice}\u201D`;

    adviceGenerator.classList.remove('on-load');

    currentAdviceId = quote.slip.id;
  } else if(quote.slip.id === currentAdviceId) {
    adviceGenerator.classList.remove('on-load');
  } else {
    adviceId.textContent = 'Sorry!';
    adviceQuote.textContent = 'Unable to generate advice. Please reload the page or click the dice button.';

    adviceGenerator.classList.remove('on-load');
  }
};

asyncGetQuote();

adviceDiceRoll.addEventListener('click', () => {
  asyncGetQuote();
});