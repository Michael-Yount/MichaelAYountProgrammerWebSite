"use strict";


////////////  VARIABLES

const resume = document.querySelector('#resume');

////////////   BUTTONS FUNCTIONALITY

const openModalsButton = document.querySelectorAll('.open-modal');
const closeModalButton = document.querySelector('.close-modal')

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');




const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  e.preventDefault();
}

const closeModal = function (e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  e.preventDefault();
}




openModalsButton.forEach((btn) => btn.addEventListener('click', openModal));
closeModalButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);














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



