// 'use strict';
//
// (function () {
//   var mainNavCloseButton = document.querySelector('.main-nav__close-wrapper');
//   var mainNav = document.querySelector('.main-nav');
//
//   var hideMainNav = function () {
//     if (mainNav.classList.contains('main-nav--js-close') !== true) {
//       mainNav.classList.add('main-nav--js-close');
//     }
//   };
//
//   var showMainNav = function () {
//     if (mainNav.classList.contains('main-nav--js-close') === true) {
//       mainNav.classList.remove('main-nav--js-close');
//     }
//   };
//
//   var onCloseMainNavMenu = function () {
//     hideMainNav();
//     window.openMenu.showMainNavOpenButton();
//   };
//
//   var addMainNavCloseButtonListener = function () {
//     mainNavCloseButton.addEventListener('mousedown', onCloseMainNavMenu);
//   };
//
//   // addMainNavCloseButtonListener();
//   // hideMainNav();
//   // onCloseMainNavMenu();
//
//   window.closeMenu = {
//     hideMainNav: hideMainNav,
//     showMainNav: showMainNav,
//     addMainNavCloseButtonListener: addMainNavCloseButtonListener,
//     onCloseMainNavMenu: onCloseMainNavMenu
//   };
// })();
