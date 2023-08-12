fetch('scripts/data.json')
  .then(res => res.json())
  .then(data => {
    const placeholder = document.querySelector('.right-side');

    data.forEach(activity => {
      placeholder.innerHTML += `
      <div class="container">
        <div class="color-header play"></div>
        <div class="time-info">
          <div class="time-header">
            <div class="activity-name">
            ${activity.title}
            </div>
            <img class="options-button" src="images/icon-ellipsis.svg" alt="">
          </div>
          <div class="time-amount">
          ${activity.timeframes.weekly.current}hrs
          </div>
          <div class="time-before">
          Last week - ${activity.timeframes.weekly.previous}hrs
          </div>
        </div>
      </div>
      `
    });
  });