'use strict'

// Menu
const hamburger = document.querySelector('.hamburger'),
      closeMenu = document.querySelector('.promo__close'),
      promoMenu = document.querySelector('.promo__menu'),
      overflow = document.querySelector('.overflow');

hamburger.addEventListener('click', () => {
    promoMenu.classList.add('show');
    overflow.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    overflow.classList.remove('show');
    promoMenu.classList.remove('show');
})