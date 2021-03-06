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

const header = document.querySelector(".header");
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

///////////   REVEAL SECTIONS
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

/// LAZY LOADING PICTURES

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// SLIDER  ////////////////////


const slider = function () {

  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  ////  FUNCTIONS
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeEnd",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };


  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach(dot => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };


  /// NEXT SLIDE

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  
  };
  init();


  ///  EVENT HANDLERS
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    console.log(e);

    if (e.key === "ArrowLeft") prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();


// window.addEventListener('load', function (e) {
//   console.log('Pade fully Loaded', e);
// })