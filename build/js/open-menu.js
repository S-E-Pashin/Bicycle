// 'use strict';
//
// (function () {
//   var mainNavOpenButton = document.querySelector('.promo__button-nav');
//
//   var hideMainNavOpenButton = function () {
//     if (mainNavOpenButton.classList.contains('visually_hidden') !== true) {
//       mainNavOpenButton.classList.add('visually_hidden');
//     }
//   };
//
//   var showMainNavOpenButton = function () {
//     if (mainNavOpenButton.classList.contains('visually_hidden') === true) {
//       mainNavOpenButton.classList.remove('visually_hidden');
//     }
//   };
//
//   var getOpenMenu = function () {
//     hideMainNavOpenButton();
//     window.closeMenu.showMainNav();
//     window.closeMenu.addMainNavCloseButtonListener();
//   };
//
//   var addMainNavOpenButtonListener = function () {
//     mainNavOpenButton.addEventListener('mousedown', getOpenMenu);
//   };
//
//   var startJsMainMenu = function () {
//     window.closeMenu.onCloseMainNavMenu();
//     addMainNavOpenButtonListener();
//   };
//
//   startJsMainMenu();
//
//   window.openMenu = {
//     showMainNavOpenButton: showMainNavOpenButton
//   };
// })();
