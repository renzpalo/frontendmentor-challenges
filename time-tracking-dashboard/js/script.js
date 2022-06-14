

const dashboardContainer = document.querySelector('.dashboard');

const radioButtonDates = document.querySelectorAll('.date-control');

const getJSON = () => {
  let request = new XMLHttpRequest();

  request.open('GET', 'data.json', false);
  request.send(null);

  return JSON.parse(request.responseText);
};

const generateTimetracker = (data) => {
  let timeTrackerHTML = '';

  data.forEach(element => {
    console.log(element);
    timeTrackerHTML += `<div class="time-tracker">
                          <div class="time-tracker__panel">
                            <div class="time-tracker__header">
                              <h4>${element.title}</h4>
                              <button type="button" class="button-icon">...</button>
                            </div>
                            <div class="time-tracker__stats">
                              <p class="time-tracker__stats__time">${element.timeframes.weekly.current}hrs</p>
                              <p class="time-tracker__stats__previous-time">Previous - ${element.timeframes.weekly.previous}hrs</p>
                            </div>
                          </div>
                        </div>`;
  });

  dashboardContainer.insertAdjacentHTML('beforeend', timeTrackerHTML);
};

generateTimetracker(getJSON());