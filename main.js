const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');


let showMenu = false;

const toggleMenu = () => {
    if(!showMenu) {
        menuBtn.classList.add('open');
        burger.classList.add('open');
        navbar.classList.add('open');
        body.classList.add('open');
        showMenu = true;
    } else {
        menuBtn.classList.remove('open');
        burger.classList.remove('open');
        navbar.classList.remove('open');
        body.classList.remove('open');
        showMenu = false;
    }
}

burger.addEventListener('click', toggleMenu);