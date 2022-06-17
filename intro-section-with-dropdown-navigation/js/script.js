const nav = document.querySelector('.nav');
const navHamburger = document.querySelector('.nav-hamburger');
const navDropdowns = document.querySelectorAll('.nav .nav-dropdown');

navHamburger.addEventListener('click', (e) => {
  if(nav.classList.contains('nav__active')) {
    nav.classList.remove('nav__active');
  } else {
    nav.classList.add('nav__active');
  }
});

navDropdowns.forEach((navDropdown, index) => {
  console.log(navDropdown.children, index);

  const navDropdownLink = navDropdown.children[0];
  const navDropdownMenu = navDropdown.children[1];

  navDropdownLink.addEventListener('click', (e) => {
    // Collapse other dropdown menus
    navDropdowns.forEach((navDropdownCollapse, indexCollapse) => {
      if(indexCollapse !== index) {
        if(navDropdownCollapse.children[1].classList.contains('nav-dropdown-menu__active')) {
          navDropdownCollapse.children[1].classList.remove('nav-dropdown-menu__active');
        }
      }
    });

    if(navDropdownMenu.classList.contains('nav-dropdown-menu__active')) {
      navDropdownMenu.classList.remove('nav-dropdown-menu__active');
    } else {
      navDropdownMenu.classList.add('nav-dropdown-menu__active');
    }
  });
});





