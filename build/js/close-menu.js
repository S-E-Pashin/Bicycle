'use strict';
(function () {
  // var mainNavClose = document.querySelector(".main-nav__close");
  var removeMainNav = function () {
    var mainNav = document.querySelector(".main-nav");
    mainNav.classList.add("main-nav--js-close");
  }
  // console.log(mainNavClose);
  removeMainNav();
})();
