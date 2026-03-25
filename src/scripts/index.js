const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => headerBurger.classList.toggle('is-active'));

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 1. машина
gsap.fromTo(
  '.car',
  { y: '-150%' },
  {
    y: '-50%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.scene',
      start: 'top 100%',
      end: 'center center',
      scrub: true,
    },
  },
);

// 2. сцена (pin)
const sceneTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.scene',
    start: 'center center',
    end: '+=1200',
    scrub: true,
    pin: true,
  },
});

// 3. фон
sceneTl.to('.overlay', {
  y: '-100%',
  ease: 'none',
});
