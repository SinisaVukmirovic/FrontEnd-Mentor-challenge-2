const menuBtn = document.querySelector('#menuBtn');
const menuBtnIcon = menuBtn.querySelector('img');
const navLinks = document.querySelector('.nav-links');

const openMenu = () => {
    menuBtn.classList.toggle('open');
    changeIcon();
    
    navLinks.classList.toggle('open');
}

const changeIcon = () => {
    if (menuBtn.classList.contains('open')) {
        return menuBtnIcon.setAttribute('src', './assets/images/icon-menu-close.svg');
    } 
    return menuBtnIcon.setAttribute('src', './assets/images/icon-menu.svg');
}

menuBtn.addEventListener('click', openMenu);

// const changeIcon = () => {
//     if (menuBtn.classList.contains('closed')) {
//         menuBtn.classList.remove('closed');
//         menuBtn.classList.add('open');
//         menuBtnIcon.setAttribute('src', './assets/images/icon-menu-close.svg');
//     } else {
//         menuBtn.classList.add('closed');
//         menuBtn.classList.remove('open');
//         menuBtnIcon.setAttribute('src', './assets/images/icon-menu.svg');
//     }
// }


// menuBtn.addEventListener('click', changeIcon);