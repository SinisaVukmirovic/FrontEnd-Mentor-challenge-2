import { bodyElem, menuBtn, navLinks } from './DOMElems.js';
import changeIcon from './changeIcon.js';

export default function openMenu() {
    menuBtn.classList.toggle('open');
    bodyElem.classList.toggle('darken-bg');
    changeIcon();
    navLinks.classList.toggle('open');
};

menuBtn.addEventListener('click', openMenu);