const bodyElem = document.querySelector('body');
const menuBtn = bodyElem.querySelector('#menuBtn');
const menuBtnIcon = bodyElem.querySelector('img');
const navLinks = bodyElem.querySelector('.nav-links');
let headlineImg = bodyElem.querySelector('.headline figure img');

const headlineImages = {
    mobile: './assets/images/image-web-3-mobile.jpg',
    desktop: './assets/images/image-web-3-desktop.jpg'
}

if (window.innerWidth >= 1440) {
    headlineImg.src = headlineImages.desktop;
}

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