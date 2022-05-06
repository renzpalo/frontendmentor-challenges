const creationItems = [
  {
    title: 'Deep earth',
    bgMobile: 'mobile/image-deep-earth.jpg',
    bgDesktop: 'desktop/image-deep-earth.jpg'
  },
  {
    title: 'Night arcade',
    bgMobile: 'mobile/image-night-arcade.jpg',
    bgDesktop: 'desktop/image-night-arcade.jpg'
  },
  {
    title: 'Soccer team VR',
    bgMobile: 'mobile/image-soccer-team.jpg',
    bgDesktop: 'desktop/image-soccer-team.jpg'
  },
  {
    title: 'The grid',
    bgMobile: 'mobile/image-grid.jpg',
    bgDesktop: 'desktop/image-grid.jpg'
  },
  {
    title: 'From up above VR',
    bgMobile: 'mobile/image-from-above.jpg',
    bgDesktop: 'desktop/image-from-above.jpg'
  },
  {
    title: 'Pocket borealis',
    bgMobile: 'mobile/image-pocket-borealis.jpg',
    bgDesktop: 'desktop/image-pocket-borealis.jpg'
  },
  {
    title: 'The curiosity',
    bgMobile: 'mobile/image-curiosity.jpg',
    bgDesktop: 'desktop/image-curiosity.jpg'
  },
  {
    title: 'Make it fisheye',
    bgMobile: 'mobile/image-fisheye.jpg',
    bgDesktop: 'desktop/image-fisheye.jpg'
  }
];

const ourCreationsGrid = document.querySelector('.our-creations');

// Media Queries
const laptopMediaQuery = window.matchMedia('(min-width: 1024px)');

const generateOurCreationsContent = () => {
  let ourCreationsGridContent = '';
  let creationCardBg = '';

  creationItems.forEach(creationItem => {
    if(laptopMediaQuery.matches) {
      creationCardBg = creationItem.bgDesktop;
    } else {
      creationCardBg = creationItem.bgMobile;
    }

    ourCreationsGridContent += `<div class="creation-card" 
                                  style="background-image: url('images/${creationCardBg}');">
                                  <div class="overlay">
                                    <h2>${creationItem.title}</h2>
                                  </div>
                                </div>`;
  });

  ourCreationsGrid.innerHTML = ourCreationsGridContent;
}

generateOurCreationsContent();

// Navigation
const navbarHamburgerMenu = document.querySelector('.navbar-burger-menu');
const navbarMenu = document.querySelector('.navbar-menu');

navbarHamburgerMenu.addEventListener('click', (event) => {
  if(navbarMenu.style.display == 'block') {
    navbarMenu.style.display = 'none';
    navbarHamburgerMenu.children[0].src = 'images/icon-hamburger.svg';
  } else {
    navbarMenu.style.display = 'block';
    navbarHamburgerMenu.children[0].src = 'images/icon-close.svg';
  }
});