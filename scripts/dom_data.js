const getData = () => { fetch('scripts/data.json')
  .then(res => res.json())
  .then(data => {
    const placeholder = document.querySelector('.right-side');
    placeholder.innerHTML = ``;
    
      data.forEach(activity => {
        if (periodSelectors[0].classList.contains('is-toggled')) {
          placeholder.innerHTML += `
      <div class="${activity.color}">
      <div class="container">
          <div class="time-info">
            <div class="time-header">
              <div class="activity-name">
              ${activity.title}
              </div>
              <img class="options-button" src="images/icon-ellipsis.svg" alt="">
            </div>
            <div class="time">
              <div class="time-amount">
              ${activity.timeframes.daily.current}hrs
              </div>
              <div class="time-before">
              Yesterday - ${activity.timeframes.daily.previous}hrs
              </div>
            </div>
          </div>
        </div>
      </div>`
        } else if (periodSelectors[1].classList.contains('is-toggled')) {
          placeholder.innerHTML += `
        <div class="${activity.color}">
        <div class="container">
            <div class="time-info">
              <div class="time-header">
                <div class="activity-name">
                ${activity.title}
                </div>
                <img class="options-button" src="images/icon-ellipsis.svg" alt="">
              </div>
              <div class="time">
                <div class="time-amount">
                ${activity.timeframes.weekly.current}hrs
                </div>
                <div class="time-before">
                Last week - ${activity.timeframes.weekly.previous}hrs
                </div>
              </div>
            </div>
          </div>
        </div>`
        } else if (periodSelectors[2].classList.contains('is-toggled')) {
          placeholder.innerHTML += `
          <div class="${activity.color}">
          <div class="container">
              <div class="time-info">
                <div class="time-header">
                  <div class="activity-name">
                  ${activity.title}
                  </div>
                  <img class="options-button" src="images/icon-ellipsis.svg" alt="">
                </div>
                <div class="time">
                  <div class="time-amount">
                  ${activity.timeframes.monthly.current}hrs
                  </div>
                  <div class="time-before">
                  Last month - ${activity.timeframes.monthly.previous}hrs
                  </div>
                </div>
              </div>
            </div>
          </div>`
        } else {
          placeholder.innerHTML += `
            <div class="${activity.color}">
            <div class="container">
              <div class="time-info">
                <div class="time-header">
                  <div class="activity-name">
                  ${activity.title}
                  </div>
                  <img class="options-button" src="images/icon-ellipsis.svg" alt="">
                </div>
                <div class="time">
                  <div class="time-amount">
                  -- hrs
                  </div>
                  <div class="time-before">
                  </div>
                </div>
              </div>
            </div>
            </div>`
        };
      });
    });
  };