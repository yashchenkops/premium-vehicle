import { burgerMenuOpen } from './headerMenuBurger';
import { sectionAboutCarAnimationInit } from './aboutAnimation';
import { servicesSlider } from './servicesSlider';
import { featuredSlider } from './featuredSlider';
import AOS from 'aos';

import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuOpen();
  sectionAboutCarAnimationInit();
  servicesSlider();
  // featuredSlider();
  AOS.init({
    once: true,
  });
});
