const navHamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

navHamburger.addEventListener('click', (e) => {
  if(navMenu.style.display == 'flex') {
    navMenu.style.display = 'none';
    e.currentTarget.style.backgroundImage = 'url(images/icon-hamburger.svg)';
  } else {
    navMenu.style.display = 'flex';
    e.currentTarget.style.backgroundImage = 'url(images/icon-close.svg)';
  }
});