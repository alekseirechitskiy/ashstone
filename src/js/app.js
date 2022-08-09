const body = document.querySelector('.body');
const menuButtonOpen = document.querySelector('.button__open-menu');
const menuButtonClose = document.querySelector('.button__close-menu');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');

const toggleMenu = function () {
  menuList.classList.toggle('menu__list--active');
  body.classList.toggle('overflow-hidden-body');
}

// Открытие и закрытие меню
menuButtonOpen.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

menuButtonClose.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

// закрытие меню по клику вне области меню
document.addEventListener('click', function (e) {
  const target = e.target;
  const itsMenuList = target == menuList || menuList.contains(target);
  const itsMenuButton = target == menuButtonOpen;
  const menuListIsActive = menuList.classList.contains("menu__list--active");

  if (!itsMenuList && !itsMenuButton && menuListIsActive) {
    toggleMenu();
  }
});

// Исчезновение горизонтального меню при скролле
let headerBottom = document.querySelector('.header__bottom');
let scrollPrev = 0;

window.onscroll = function () {
  let scrolled = window.pageYOffset;
  if (scrolled > 200 && scrolled > scrollPrev) {
    headerBottom.classList.add('out');
  } else {
    headerBottom.classList.remove('out');
  }
  scrollPrev = scrolled;
};