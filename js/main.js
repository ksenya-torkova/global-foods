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

// filter list show
var mainFilterToggle = document.querySelector('.filter__toggle');

if (mainFilterToggle) {
  var mainFilterList = document.querySelector('.filter__list');
  
  mainFilterToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainFilterToggle.classList.toggle('filter__toggle--active');
    mainFilterList.classList.toggle('filter__list--visible');
  });
}

// main filters open
var mainFilterToggles = document.querySelectorAll('.filter__type');

if (mainFilterToggles) {
  var mainFilters = document.querySelectorAll('.filter__type-list');
  
  for (var i = 0; i < mainFilterToggles.length; i++) {
    mainFilterToggles[i].setAttribute('data-index', i);
    
    mainFilterToggles[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var mainFiltersIndex = evt.currentTarget.getAttribute('data-index');
      this.classList.toggle('filter__type--active');
      mainFilters[mainFiltersIndex].classList.toggle('filter__type-list--visible');
    });
  }
}

// sorting list show ang toggle
var mainSortingToggle = document.querySelector('.sorting__toggle');

if (mainSortingToggle) {
  var mainSortingList = document.querySelector('.sorting__options');
  var mainSortingOptions = mainSortingList.querySelectorAll('.sorting__type');
  
  mainSortingToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    mainSortingToggle.classList.toggle('sorting__toggle--active');
    mainSortingList.classList.toggle('sorting__options--visible');
  });
  
  for (var i = 0; i < mainSortingOptions.length; i++) {
    mainSortingOptions[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var text = this.textContent;
      console.log(text);
      mainSortingToggle.textContent = text;
    });
  }
}

// catalog navigation sublists open
var catalogNavToggles = document.querySelectorAll('.catalog-nav__link--submenu');

if (catalogNavToggles) {
  var catalogNavSublists = document.querySelectorAll('.catalog-nav__sublist');
  
  for (var i = 0; i < catalogNavToggles.length; i++) {
    catalogNavToggles[i].setAttribute('data-index', i);
    
    catalogNavToggles[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      var catalogNavIndex = evt.currentTarget.getAttribute('data-index');
      this.classList.toggle('catalog-nav__link--active');
      catalogNavSublists[catalogNavIndex].classList.toggle('catalog-nav__sublist--visible');
    });
  }
}

// search form open
var searchFormToggle = document.querySelector('.search__open-button');

if (searchFormToggle) {
  var searchForm = document.querySelector('.search');
  
  searchFormToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchForm.classList.toggle('search--open');
  });
}

// toggle amount buttons
var viewAmountToggles = document.querySelectorAll('.view__amount-toggle');

if (viewAmountToggles) {
  var deleteViewAmountToggleActiveClass = function () {
    var viewAmountToggleActive = document.querySelector('.view__amount-toggle--active');

    if (viewAmountToggleActive !== null) {
      viewAmountToggleActive.classList.remove('view__amount-toggle--active');
    }
  };

  for (var i = 0; i < viewAmountToggles.length; i++) {
    viewAmountToggles[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      deleteViewAmountToggleActiveClass();
      this.classList.add('view__amount-toggle--active');
    })
  };
}

// toggle catalog layout
var layoutToggles = document.querySelectorAll('.view__layout-toggle');

if (layoutToggles) {
  var layoutToggleTile = document.querySelector('.view__layout-toggle--tile');
  var layoutToggleList = document.querySelector('.view__layout-toggle--list');
  var catalogItems = document.querySelectorAll('.catalog__item');
  
  var deleteLayoutTogglesActiveClass = function () {
    var layoutTogglesActive = document.querySelector('.view__layout-toggle--active');

    if (layoutTogglesActive !== null) {
      layoutTogglesActive.classList.remove('view__layout-toggle--active');
    }
  };

  for (var i = 0; i < layoutToggles.length; i++) {
    layoutToggles[i].addEventListener('click', function(evt) {
      evt.preventDefault();
      deleteLayoutTogglesActiveClass();
      this.classList.add('view__layout-toggle--active');
      
      var layoutTogglesActive = document.querySelector('.view__layout-toggle--active');
      
      if (layoutTogglesActive.classList.contains('view__layout-toggle--tile')) {
        for (var i = 0; i < catalogItems.length; i++) {
          catalogItems[i].classList.remove('catalog__item--row');
        }
      }
      
      if (layoutTogglesActive.classList.contains('view__layout-toggle--list')) {
        for (var i = 0; i < catalogItems.length; i++) {
          catalogItems[i].classList.add('catalog__item--row');
        }
      }
    })
  };
}
