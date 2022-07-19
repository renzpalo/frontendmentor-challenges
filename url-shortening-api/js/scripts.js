const nav = document.querySelector('.nav');
const navHamburger = document.querySelector('.nav .nav-hamburger');

navHamburger.addEventListener('click', (e) => {
  nav.classList.toggle('nav-active');
});

// Shorten Link From
const formShortenLink = document.querySelector('.shorten-link__form');

formShortenLink.addEventListener('submit', (e) => {
  e.preventDefault();

  
});