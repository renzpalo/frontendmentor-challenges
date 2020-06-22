

// Navigation Menu
const btnNavMenu = document.querySelector('.nav-menu-icon');
const navMenu = document.querySelector('.nav-menu-list');

btnNavMenu.addEventListener('click', () => {
    // Open/close navigation menu
    if(navMenu.style.display == 'none' || navMenu.style.display == '') {
        btnNavMenu.classList.remove('nav-open');
        btnNavMenu.classList.add('nav-close');

        navMenu.style.display = 'block';
    } else {
        console.log('close');

        btnNavMenu.classList.remove('nav-close');
        btnNavMenu.classList.add('nav-open');

        navMenu.style.display = 'none';
    }
});