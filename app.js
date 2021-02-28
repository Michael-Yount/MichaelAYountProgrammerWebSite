"use strict";

////////////  VARIABLES

const resume = document.querySelector("#resume");
const nav = document.querySelector(".header-links__nav");
const linkToScroll = document.querySelector("#projects");
const section1 = document.querySelector("#section--1");
////////////   BUTTONS FUNCTIONALITY
const openModalsButton = document.querySelectorAll(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  e.preventDefault();
};

const closeModal = function (e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  e.preventDefault();
};

openModalsButton.forEach((btn) => btn.addEventListener("click", openModal));
closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

////////    SMOOTH SCROLL TO SECTIONS

linkToScroll.addEventListener("click", function (e) {
  e.preventDefault();

  console.log("click");

  section1.scrollIntoView({ behavior: "smooth" });
});

////////// MENU FADE ANIMATION

const handleHover = function (e) {
  if (e.target.classList.contains(".header-links__list--link")) {
    const linkClicked = e.target;
    const siblings = linkClicked
      .closest(".header-links__nav")
      .querySelector(".header-links__list--link");
    const logo = linkClicked.closest(".header-links__nav").querySelector("img");

    siblings.forEach((el) => {
      console.log("in");
      if (el !== linkClicked) el.style.opacity = this;
    });
    console.log("out");

    logo.style.opacity = this;
  }
};

//////   PASSING ARGUMENTS INTO HANDLER

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

///    STICKY NAVAGATION

// const initialCoords = section1.getBoundingClientRect();

// console.log(initialCoords)

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');

// });

//////////   STICKY NAVABATION : INTERSECTION OBSERVER API



// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshhold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;


const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,

  
});

headerObserver.observe(header);



