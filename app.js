"use strict";

const linkToScroll = document.querySelector(
  ".header-links__list--projectsLink"
);

const section1 = document.querySelector("#section--1");

linkToScroll.addEventListener("click", function (e) {
  
  e.preventDefault();

  console.log('click');
  
  section1.scrollIntoView({ behavior: "smooth" });

});

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  console.log('ENTER')
});

