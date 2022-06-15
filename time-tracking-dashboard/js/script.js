

const dashboardContainer = document.querySelector('.dashboard');

const radioButtonDates = document.querySelectorAll('.date-control');

let timeFrame = 'daily';

// Fetch JSON data
const getJSON = () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'data.json', false);
  request.send(null);

  return JSON.parse(request.responseText);
};

// Update time trackers on radio button change
radioButtonDates.forEach(radio => {
  radio.addEventListener('change', (e) => {
    timeFrame = e.target.value;

    updateTimeTracker(getJSON(), timeFrame);
  })
});

// Generate timetracker UI
const generateTimetracker = (data, timeFrame) => {
  let timeTrackerHTML = '';

  console.log(data);

  data.forEach(element => {
    timeTrackerHTML += 
      `<div class="time-tracker time-tracker__${convertToSlug(element.title)}">
        <div class="time-tracker__panel">
          <div class="time-tracker__header">
            <h4>${element.title}</h4>
            <button type="button" class="button-icon">...</button>
          </div>
          <div class="time-tracker__stats">
            <p class="time-tracker__stats__time">${element.timeframes[timeFrame].current}hrs</p>
            <p class="time-tracker__stats__previous-time">${getTimeFrameLabel(timeFrame)} - ${element.timeframes[timeFrame].previous}hrs</p>
          </div>
        </div>
      </div>`;
  });

  dashboardContainer.insertAdjacentHTML('beforeend', timeTrackerHTML);
};

// Update the time-tracker time
const updateTimeTracker = (timeTrackers, timeFrame) => {
  timeTrackers.forEach(timeTracker => {
    document.querySelector('.time-tracker__' 
              + convertToSlug(timeTracker.title) 
              + ' .time-tracker__stats__time')
              .textContent = 
              timeTracker.timeframes[timeFrame].current + 'hrs';

    document.querySelector('.time-tracker__' 
              + convertToSlug(timeTracker.title) 
              + ' .time-tracker__stats__previous-time')
              .textContent = 
              getTimeFrameLabel(timeFrame) + ' - ' + timeTracker.timeframes[timeFrame].previous + 'hrs';
  });

  // Add animation on text update
  document.querySelectorAll('.time-tracker .time-tracker__stats')
    .forEach(element => {
      element.classList.remove('fade');

      setTimeout(() => {
        element.classList.add('fade');
      }, 1);
    });
};

// Convert the title for html classes
const convertToSlug = (string) => {
  return string.toLowerCase().replace(' ' , '-');
}

// Get the timeframe label based on timeframe
const getTimeFrameLabel = (timeFrame) => {
  let timeFrameLabel = 'Previous';

  if(timeFrame === 'weekly') {
    timeFrameLabel = 'Last Week';
  } else if(timeFrame === 'monthly') {
    timeFrameLabel = 'Last Month';
  }

  return timeFrameLabel;
};

generateTimetracker(getJSON(), timeFrame);

document.querySelectorAll('.time-tracker').forEach((timeTracker2, i) => {
  setTimeout(() => {
    timeTracker2.style.display = 'block';
    timeTracker2.style.animation = '1s slideUp ease';

    console.log(timeTracker2);
  }, i * 100);
});
