(() => {
  let menuActive = false
  let top = document.querySelector('.toplinks')

  top.addEventListener('click', ev => {
    if (ev.target.classList.contains('toplinks')) {
      ev.preventDefault()
      menuActive = !menuActive

      if (menuActive) {
        top.classList.add('active')
      } else {
        top.classList.remove('active')
      }
    }
  })

})()