const menuBtn = document.querySelector('#menuBtn');
const menuBtnIcon = menuBtn.querySelector('img');
const bodyElem = document.querySelector('body');
const navLinks = document.querySelector('.nav-links');

const openMenu = () => {
    menuBtn.classList.toggle('open');
    bodyElem.classList.toggle('darken-bg');
    changeIcon();
    navLinks.classList.toggle('open');
}

const changeIcon = () => {
    if (menuBtn.classList.contains('open')) {
        setTimeout(() => {
            return menuBtnIcon.setAttribute('src', './assets/images/icon-menu-close.svg');
        }, 150);
    } 
    return menuBtnIcon.setAttribute('src', './assets/images/icon-menu.svg');
}

menuBtn.addEventListener('click', openMenu);