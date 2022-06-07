const navHamburger = document.querySelector('.nav-hamburger');
const navMenu = document.querySelector('.nav-menu');

const dropdownLinks = document.querySelectorAll('.nav .nav-menu .dropdown-link');

navHamburger.addEventListener('click', (e) => {
  if(navMenu.style.display == 'flex') {
    navMenu.style.display = 'none';
    e.currentTarget.style.backgroundImage = 'url(images/icon-hamburger.svg)';
  } else {
    navMenu.style.display = 'flex';
    e.currentTarget.style.backgroundImage = 'url(images/icon-close.svg)';
  }
});

dropdownLinks.forEach((dropdownLink, index) => {
  console.log(dropdownLink, index);

  dropdownLink.addEventListener('click', (event) => {
    event.preventDefault();

    const dropdownMenu = event.currentTarget.children[1];

    if(dropdownMenu.style.display == 'block') {
      dropdownMenu.style.display = 'none';
      dropdownLink.classList.remove('active');
    } else {
      dropdownMenu.style.display = 'block';
      dropdownLink.classList.add('active');
    }
  });
});