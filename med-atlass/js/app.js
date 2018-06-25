'use strict';

// HEADROOM.JS
var headroomEl = document.querySelector("header");
var options = {
  offset: 0,
  tolerance: { up: 5, down: 10 }
};
var headroom = new Headroom(headroomEl, options);
headroom.init();

//PARALLAX
var p0 = new Parallax('.parallax_scene0', {
  offsetYBounds: 50,
  intensity: 20,
  center: 0.5,
  safeHeight: 0.15
}).init();

var p1 = new Parallax('.parallax_scene1', {
  offsetYBounds: 50,
  intensity: 50,
  center: 0.5,
  safeHeight: 0.15
}).init();

var p2 = new Parallax('.parallax_scene2', {
  offsetYBounds: 50,
  intensity: 50,
  center: 0.5,
  safeHeight: 0.15
}).init();

//VANILLA-MODAL
var vanillaModal = new VanillaModal.default({
  modal: '.modal',
  modalInner: '.modal-inner',
  modalContent: '.modal-content',
  open: '[data-modal-open]',
  close: '[data-modal-close]',
  page: 'body',
  loadClass: 'vanilla-modal',
  class: 'modal-visible',
  clickOutside: true,
  closeKeys: [27],
  transitions: true,
  onBeforeOpen: null,
  onBeforeClose: null,
  onOpen: null,
  onClose: null
});

//REVEAL
var rev = new ScrollReveal({
  reset: false,
  mobile: true,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});
rev.reveal('.reveal', {
  viewFactor: 0.3,
  opacity: 0,
  scale: 0.9,
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 100
});

rev.reveal('.reveal-title', {
  viewFactor: 0.3,
  opacity: 0,
  scale: 0.5,
  origin: 'right',
  distance: '100px',
  duration: 1500,
  delay: 0
});

// city-button & cityAtlas

var cityButton = document.querySelectorAll(".city-button");
var cityAtlas = document.querySelectorAll(".js-atlas");

if (cityAtlas && cityAtlas.length > 0 && cityButton && cityButton.length > 0) {
  var cityButtonActive = document.querySelector(".city-button.active"),
      cityAtlasOpen = document.querySelector(".js-atlas.open");

  if (!cityButtonActive && !cityAtlasOpen) {
    cityButtonActive = document.querySelectorAll(".city-button")[0];
    cityButtonActive.classList.add("active");
  }

  if (cityButtonActive && !cityAtlasOpen) {
    cityAtlas.forEach(function (atlas) {
      if (cityButtonActive.name === atlas.id) {
        cityAtlasOpen = atlas;
      }
    });
    cityAtlasOpen.classList.add("open");
  }

  if (!cityButtonActive && cityAtlasOpen) {
    cityButton.forEach(function (button) {
      if (cityAtlasOpen.id === button.name) {
        cityButtonActive = button;
      }
    });
    cityButtonActive.classList.add("active");
  }

  cityButton.forEach(function (button) {
    button.addEventListener("click", changeCityAtlas);
  });
}

function changeCityAtlas(e) {
  e.preventDefault();
  if (e.target.name !== cityAtlasOpen.id) {

    cityButtonActive.classList.remove("active");
    e.target.classList.add("active");
    cityButtonActive = e.target;

    cityAtlasOpen.classList.remove("open");
    cityAtlas.forEach(function (city) {
      if (city.id === e.target.name) {
        city.classList.add("open");
        cityAtlasOpen = city;
      }
    });
  }
}