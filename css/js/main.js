const menuButton = document.querySelector('.menuButton');
const menuDesp = document.querySelector('.menuButton-clic');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menuNav');
const botones = document.querySelectorAll('.botones');

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    menuDesp.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    botones.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    menuDesp.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    botones.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}