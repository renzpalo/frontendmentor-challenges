const nav = document.querySelector('.nav');
const navHamburger = document.querySelector('.nav .nav-hamburger');

navHamburger.addEventListener('click', (e) => {
  nav.classList.toggle('nav-active');
});

// Fetch data from https://api.shrtco.de/v2/shorten?url= API
async function generateShortURL(url) {
  try {
    const result = await fetch('https://api.shrtco.de/v2/shorten?url=' + url);
    const data = await result.json();

    generateShortUrlHTML(data.result);
  } catch(error) {
    console.log(error);
  }
}

// Shorten Link From
const formShortenLink = document.querySelector('.shorten-link__form');

formShortenLink.addEventListener('submit', (e) => {
  e.preventDefault();

  const urlInput = e.target[0].value;

  if(urlInput.trim() == null || urlInput.trim() == '') {
    document.querySelector('.shorten-link__form .input-group').classList.add('input-error');
  } else {
    document.querySelector('.shorten-link__form .input-group').classList.remove('input-error');
    generateShortURL(urlInput);
  }
});

const shortenLinkLists = document.querySelector('.shorten-links');

// Add event listeners to new urls.
function copyShortUrls() {
  const shortUrlButtons = document.querySelectorAll('.shorten-links__button-copy');

  shortUrlButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // Reset all buttons
      shortUrlButtons.forEach((button) => {
        button.classList.remove('button-copied');
        button.textContent = 'Copy';
      });
      // Copy text to clipboard.
      navigator.clipboard.writeText(e.currentTarget.value);

      e.currentTarget.classList.add('button-copied');
      e.currentTarget.textContent = 'Copied!';
    });
  });
}

function generateShortUrlHTML(urls) {
  const html = `<li id="shorten-links__${urls.code}" class="shorten-links__url">
                  <div class="shorten-links__link">
                    <p class="shorten-links__link-original">${urls.original_link}</p>
                    <hr class="line">
                    <div>
                      <p class="shorten-links__link-shortened">${urls.full_short_link}</p>
                      <button type="button" class="button button-copy shorten-links__button-copy" value="${urls.full_short_link}">Copy</button>
                    </div>
                  </div>
                </li>`;

  shortenLinkLists.insertAdjacentHTML('afterbegin', html); 

  copyShortUrls();
}

