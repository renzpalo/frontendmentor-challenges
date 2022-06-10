const navHamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

const dropdownLinks = document.querySelectorAll('.nav .nav-menu .dropdown-link');

// Open/Close Hamburger Menu
navHamburger.addEventListener('click', (e) => {
  if(navMenu.style.display == 'flex') {
    navMenu.style.display = 'none';
    e.currentTarget.style.backgroundImage = 'url(images/icon-hamburger.svg)';
  } else {
    navMenu.style.display = 'flex';
    e.currentTarget.style.backgroundImage = 'url(images/icon-close.svg)';
  }
});

// Open/Close Dropdown Menus
dropdownLinks.forEach((dropdownLink, index) => {
  dropdownLink.addEventListener('click', (e) => {
    e.preventDefault();

    dropdownLinks.forEach((activeDropdownLink, activeIndex) => {
      if(index !== activeIndex) {
        if(activeDropdownLink.classList.contains('active')) {
          activeDropdownLink.classList.remove('active');
        }
      }
    });

    e.currentTarget.classList.toggle('active');
  });
});