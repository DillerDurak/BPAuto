const burgerMenu = document.querySelector('.burger__menu');
const headerNav = document.querySelector('.menu');
const headerLanguages = document.querySelector('.header__social');
const headerTop = document.querySelector('.header__top');
const headerHouse = document.querySelector('.header__house');


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerLanguages.classList.toggle('active');
    headerTop.classList.toggle('active');
    headerHouse.classList.toggle('active');
})

