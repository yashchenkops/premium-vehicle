const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => headerBurger.classList.toggle('is-active'));

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.car',
  { y: '-70%' },
  {
    y: '50%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.scene',
      start: 'top 50%',
      end: 'center center',
      scrub: true,
    },
  },
);

const introTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.scene',
    start: 'top 50%',
    end: 'top 20%',
    scrub: true,
  },
});
introTl.to('.overlay', {
  y: '50%',
  ease: 'none',
}, 0);