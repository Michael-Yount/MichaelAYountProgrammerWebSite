"use strict";


////////////  VARIABLES

const resume = document.querySelector('#resume');










////////////   BUTTONS FUNCTIONALITY

const openModal = document.querySelector('.modal-open')






////////////////////////    SMOOTH SCROLL TO SECTIONS



const linkToScroll = document.querySelector(
  "#projects"
);

const section1 = document.querySelector("#section--1");

linkToScroll.addEventListener("click", function (e) {
  
  e.preventDefault();

  console.log('click');
  
  section1.scrollIntoView({ behavior: "smooth" });

});



