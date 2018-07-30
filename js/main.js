'use strict';

// main navigation open
var mainNavigationToggle = document.querySelector('.nav__btn');

if (mainNavigationToggle) {
  var mainNavigationList = document.querySelector('.nav__list');
  
  mainNavigationToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainNavigationToggle.classList.toggle('nav__btn--cross');
    mainNavigationList.classList.toggle('nav__list--visible');
  });
}

// main navigation sublist show

var mainNavSubmenus = document.querySelectorAll('.nav__link--submenu');

if (mainNavSubmenus) {
  var mainNavSublists = document.querySelectorAll('.nav__sublist');
  
  for (var i = 0; i < mainNavSubmenus.length; i++) {
    mainNavSubmenus[i].setAttribute('data-index', i);
    
    mainNavSubmenus[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var mainNavSubmenusIndex = evt.currentTarget.getAttribute('data-index');
      this.classList.toggle('nav__link--open');
      mainNavSublists[mainNavSubmenusIndex].classList.toggle('nav__sublist--visible');
    });
  }
}
