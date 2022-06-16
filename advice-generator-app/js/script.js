const adviceId = document.querySelector('.advice__id');
const adviceQuote = document.querySelector('.advice__quote');
const adviceGenerator = document.querySelector('.advice-generator');

const adviceDiceRoll = document.getElementById('advice__dice-roll');


// Get a quote from https://api.adviceslip.com/advice
// const getQuote = () => {
//   // Fetch a quote
//   fetch('https://api.adviceslip.com/advice')
//     .then(result => {
//       console.log('Then:', result.json());

//       return result;
//     })
//     // .then(data => {
//     //   console.log('Data:', data.json());
//     // })
//     .catch(error => {
//       console.log('Error:', error);

//       return error;
//     });
// };

// Await
async function asyncGetQuote() {
  try {
    const result = await fetch('https://api.adviceslip.com/advice');
    const data = await result.json();

    generateQuote(data, true);
  } catch(error) {
    generateQuote(null, false);
  }
}

const generateQuote = (quote, isSuccess) => {
  if(isSuccess) {
    adviceId.textContent = 'Advice #' + quote.slip.id;
    adviceQuote.textContent = quote.slip.advice;

    adviceGenerator.style.transition = '';

    setTimeout(() => {
      adviceGenerator.style.transition = '.4s all ease';
    }, 500);
  } else {
    adviceId.textContent = 'Sorry!';
    adviceQuote.textContent = 'Unable to generate advice. Please reload the page or click the dice button.';
  }
};

asyncGetQuote();

adviceDiceRoll.addEventListener('click', () => {
  asyncGetQuote();
});

console.log(asyncGetQuote());
