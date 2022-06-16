const adviceId = document.querySelector('.advice__id');
const adviceQuote = document.querySelector('.advice__quote');
const adviceGenerator = document.querySelector('.advice-generator');

const adviceDiceRoll = document.getElementById('advice__dice-roll');

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
  if(isSuccess) {
    adviceId.textContent = 'Advice #' + quote.slip.id;
    adviceQuote.textContent = `\u201C${quote.slip.advice}\u201D`;

    adviceGenerator.classList.remove('on-load');

    console.log('Success Quote generated:', quote.slip.id);
  } else {
    adviceId.textContent = 'Sorry!';
    adviceQuote.textContent = 'Unable to generate advice. Please reload the page or click the dice button.';

    adviceGenerator.classList.remove('on-load');

    console.log('Error Quote generated:', quote.slip.id);
  }
};

asyncGetQuote();

adviceDiceRoll.addEventListener('click', () => {
  asyncGetQuote();
});