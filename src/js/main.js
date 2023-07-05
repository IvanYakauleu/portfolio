'use strict'

// Menu

const hamburger = document.querySelector('.hamburger'),
      closeMenu = document.querySelector('.promo__close'),
      promoWrapper = document.querySelector('.promo__wrapper'),
      promoMenu = document.querySelector('.promo__menu'),
      overflow = document.querySelector('.overflow'),
      menuLinks = document.querySelectorAll('.promo__menu ul li a');

hamburger.addEventListener('click', () => {
    promoMenu.classList.add('show');
    overflow.classList.add('show');
    promoWrapper.classList.add('activ');
    document.body.style.overflow = 'hidden';
});

function toCloseMenu() {
    overflow.classList.remove('show');
    promoMenu.classList.remove('show');
    promoWrapper.classList.remove('activ');
    document.body.style.overflow = '';
}
closeMenu.addEventListener('click', () => {
    toCloseMenu()
})

menuLinks.forEach(item => {
    item.addEventListener('click', () => {
        toCloseMenu()
    })
})