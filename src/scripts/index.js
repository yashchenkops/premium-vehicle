const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => headerBurger.classList.toggle('is-active'));

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.scene',
    start: 'center center', // ВАЖЛИВО
    end: '+=1200',
    scrub: true,
    pin: true,
  },
});

tl.to('.car', {
  top: '50%',
  y: '-50%',
  ease: 'none',
  scrollTrigger: {
    trigger: '.scene',
    start: 'top 80%', // як тільки зʼявилась
    end: 'center center', // поки не дійде до центру
    scrub: true,
  },
});

tl.to('.overlay', {
  y: '100%',
  ease: 'none',
});
