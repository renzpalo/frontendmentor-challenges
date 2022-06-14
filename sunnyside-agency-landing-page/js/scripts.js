const navHamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

navHamburger.addEventListener('click', (e) => {
  if(navMenu.style.display == 'none' || navMenu.style.display == '') {
    navMenu.style.display = 'flex';
  } else {
    navMenu.style.display = 'none';
  }
});