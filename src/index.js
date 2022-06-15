import menu from './menu.json';
import markup from './markup.hbs';
import './sass/main.scss';

const jsMenu = document.querySelector('.js-menu');
jsMenu.innerHTML = markup(menu)

// change light/dark theme
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const toggle = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

toggle.addEventListener('change', onChangeTheme);

function onChangeTheme(evt){
 if (body.classList.contains(`${Theme.DARK}`)){
  localStorage.setItem('theme', `${Theme.LIGHT}`);
 }else{
   localStorage.setItem('theme', `${Theme.DARK}`) 
 }
 onLocalStorage();
}

onLocalStorage();

function onLocalStorage(){
  if(localStorage.getItem('theme') === `${Theme.LIGHT}`){
    body.classList.add(`${Theme.LIGHT}`);
    body.classList.remove(`${Theme.DARK}`);
    return
  }
  if(localStorage.getItem('theme') === `${Theme.DARK}`){
    body.classList.add(`${Theme.DARK}`);
    body.classList.remove(`${Theme.LIGHT}`);
    toggle.checked = true
    return
  }
}


 







































































































































































































































