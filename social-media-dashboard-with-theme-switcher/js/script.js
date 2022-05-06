const documentBody = document.getElementsByTagName('body')[0];

const themeSwitchToggle = document.getElementById('theme-switch-toggle');
const metaColorScheme = document.querySelector('meta[name="color-scheme"');

const dashBoardOverviewContainer = document.querySelector('.dashboard-overview');
const dashBoardOverviewTodayContainer = document.querySelector('.card-overview-today');

const socialOverviews = [
  {
    id: 'soc_1',
    socialMedia: 'Facebook',
    socialUsername: '@nathanf',
    followerCount: 1987,
    followerIncrease: 12
  },
  {
    id: 'soc_2',
    socialMedia: 'Twitter',
    socialUsername: '@nathanf',
    followerCount: 1044,
    followerIncrease: 99
  },
  {
    id: 'soc_3',
    socialMedia: 'Instagram',
    socialUsername: '@realnathanf',
    followerCount: '11k',
    followerIncrease: 1099
  },
  {
    id: 'soc_4',
    socialMedia: 'YouTube',
    socialUsername: 'Nathan F.',
    followerCount: 8239,
    followerIncrease: -144
  }
];

const socialOverviewsToday = [
  {
    id: 'soc_today_1',
    socialMedia: 'Facebook',
    statType: 'Page Views',
    statsCount: 87,
    statsIncrease: 3
  },
  {
    id: 'soc_today_2',
    socialMedia: 'Facebook',
    statType: 'Likes',
    statsCount: 52,
    statsIncrease: -2
  },
  {
    id: 'soc_today_3',
    socialMedia: 'Instagram',
    statType: 'Likes',
    statsCount: 5462,
    statsIncrease: 2257
  },
  {
    id: 'soc_today_4',
    socialMedia: 'Instagram',
    statType: 'Profile Views',
    statsCount: '52k',
    statsIncrease: 1375
  },
  {
    id: 'soc_today_5',
    socialMedia: 'Twitter',
    statType: 'Retweets',
    statsCount: 117,
    statsIncrease: 303
  },
  {
    id: 'soc_today_6',
    socialMedia: 'Twitter',
    statType: 'Likes',
    statsCount: 507,
    statsIncrease: 553
  },
  {
    id: 'soc_today_7',
    socialMedia: 'YouTube',
    statType: 'Likes',
    statsCount: 107,
    statsIncrease: -19
  },
  {
    id: 'soc_today_8',
    socialMedia: 'YouTube',
    statType: 'Total Views',
    statsCount: 1407,
    statsIncrease: -12
  }
];

let socialOverviewsContent = '';
let socialOverviewsTodayContent = '';

console.log(-1 > 0 ? 'Positive': 'Negative', Math.abs(-1));

const generateSocialOverviews = () => {
  // Default values for icon images
  let socialMediaIcon = 'icon-facebook';
  let followerIncreaseIcon = 'icon-up';
  

  socialOverviews.forEach((socialOverview) => {
  
    followerIncreaseIcon = socialOverview.followerIncrease > 0 ? 'icon-up' : 'icon-down';
  
    // For Social media icon
    switch(socialOverview.socialMedia) {
      case 'Facebook':
        socialMediaIcon = 'icon-facebook';
        break;
      case 'Twitter': 
        socialMediaIcon = 'icon-twitter';
        break;
      case 'Instagram': 
        socialMediaIcon = 'icon-instagram';
        break;
      case 'YouTube':
        socialMediaIcon = 'icon-youtube';
        break;
      default:
        socialMediaIcon = 'icon-facebook';
        break;
    }
  
    socialOverviewsContent +=   `<div class="card-overview">
                                  <div class="card-border card-border__${socialOverview.socialMedia.toLowerCase()}"></div>
                                  <div class="card-overview__social-media">
                                    <img src="images/${socialMediaIcon}.svg" alt="${socialOverview.socialMedia} Icon">
                                    <p>${socialOverview.socialUsername}</p>
                                  </div>
                                  <p class="card-overview__followers-count">${socialOverview.followerCount}</p>
                                  <p>Followers</p>
                                  <div class="card-overview__increase">
                                    <img src="images/${followerIncreaseIcon}.svg" alt="${followerIncreaseIcon} Icon">
                                    <small class="count-${socialOverview.followerIncrease > 0 ? 'increment' : 'decrement'}">${Math.abs(socialOverview.followerIncrease)} Today</small>
                                  </div>
                                </div>`;
  
    dashBoardOverviewContainer.innerHTML = socialOverviewsContent;
  });
};

const generateSocialOverviewsToday = () => {
  // Default values for icon images
  let socialMediaIcon = 'icon-facebook';
  let followerIncreaseIcon = 'icon-up';


  socialOverviewsToday.forEach((socialOverviewToday) => {
    console.log(socialOverviewToday);

    followerIncreaseIcon = socialOverviewToday.statsIncrease > 0 ? 'icon-up' : 'icon-down';

    // For Social media icon
    switch(socialOverviewToday.socialMedia) {
      case 'Facebook':
        socialMediaIcon = 'icon-facebook';
        break;
      case 'Twitter': 
        socialMediaIcon = 'icon-twitter';
        break;
      case 'Instagram': 
        socialMediaIcon = 'icon-instagram';
        break;
      case 'YouTube':
        socialMediaIcon = 'icon-youtube';
        break;
      default:
        socialMediaIcon = 'icon-facebook';
        break;
    }

    socialOverviewsTodayContent += `<div class="card-overview__today">
                                      <div class="card-overview__title">
                                        <p>${socialOverviewToday.statType}</p>
                                        <img src="images/${socialMediaIcon}.svg" alt="${socialOverviewToday.socialMedia} Icon">
                                      </div>
                                      <div class="card-overview__stats">
                                        <p class="card-overview__count">${socialOverviewToday.statsCount}</p>
                                        <div class="card-overview__count-percentage">
                                          <img src="images/${followerIncreaseIcon}.svg" alt="Arrow Up Icon">
                                          <small class="count-${socialOverviewToday.statsIncrease > 0 ? 'increment' : 'decrement'}">${Math.abs(socialOverviewToday.statsIncrease)}%</small>
                                        </div>
                                      </div>
                                    </div>`;
  });

  dashBoardOverviewTodayContainer.innerHTML = socialOverviewsTodayContent;
};

generateSocialOverviews();
generateSocialOverviewsToday();



themeSwitchToggle.addEventListener('click', (event) => {
  if(event.target.checked) {
    documentBody.classList.add('theme-dark');
  } else {
    documentBody.classList.remove('theme-dark');
  }
});