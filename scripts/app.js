// Renders the page on start
getData()

const periodSelectors = document.querySelectorAll('.period');
// adds toggle to each clicked button
periodSelectors.forEach(button => {
  button.addEventListener('click', () => {
    // renders content on the page (probably had to add some parameters)
    getData()
    // first removes toggle from other buttons
    toggleOff()
    
    button.classList.add('is-toggled');
  })
})

function toggleOff() {
  periodSelectors.forEach(button => {
    button.classList.remove('is-toggled');
  })
}

