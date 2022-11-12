const menuBtn = document.querySelector('#menuBtn');
const navLinks = document.querySelector('.nav-links');

const openNavbar = () => {
    navLinks.classList.toggle('open');
    // menuBtn.querySelector('img').setAttribute('src', './assets/images/icon-menu-close.svg');
}

menuBtn.addEventListener('click', openNavbar);