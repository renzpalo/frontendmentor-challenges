const navbarBurger = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

navbarBurger.addEventListener('click', (e) => {
    if(navbarMenu.style.display == null || navbarMenu.style.display == '' || navbarMenu.style.display == 'none') {
        navbarMenu.style.display = 'flex';
        navbarBurger.children[0].src = 'images/icon-close.svg';
        
    } else {
        navbarMenu.style.display = 'none';
        navbarBurger.children[0].src = 'images/icon-hamburger.svg';
    }
});