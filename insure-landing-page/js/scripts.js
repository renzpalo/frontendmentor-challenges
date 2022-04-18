

const navHamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

navHamburger.addEventListener('click', (e) => {
    if(navMenu.style.display == '' || navMenu.style.display == null || navMenu.style.display == 'none') {
        navMenu.style.display = 'flex';
        navHamburger.children[0].src = 'images/icon-close.svg';
    } else {
        navMenu.style.display = 'none';
        navHamburger.children[0].src = 'images/icon-hamburger.svg';
    }
});