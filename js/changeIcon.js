import { menuBtn, menuBtnIcon } from './DOMElems.js';

export default function changeIcon() {
    if (menuBtn.classList.contains('open')) {
        setTimeout(() => {
            return menuBtnIcon.setAttribute('src', './assets/images/icon-menu-close.svg');
        }, 150);
    } 
    return menuBtnIcon.setAttribute('src', './assets/images/icon-menu.svg');
}