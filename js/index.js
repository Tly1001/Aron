function init() {

  const nav = document.getElementById('nav')
  window.onscroll = function () { 
    'use strict'
    if (window.pageYOffset > 200 ) {
      nav.classList.add('nav-colored')
      nav.classList.remove('nav-transparent')
    } else {
      nav.classList.add('nav-transparent')
      nav.classList.remove('nav-colored')
    }
  }

}
window.addEventListener('DOMContentLoaded', init)