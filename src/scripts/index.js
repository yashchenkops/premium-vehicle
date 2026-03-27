import { burgerMenuOpen } from './headerMenuBurger';
import { sectionAboutCarAnimationInit } from './aboutAnimation';
import { servicesSlider } from './servicesSlider';
import { featuredSlider } from './featuredSlider';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuOpen();
  sectionAboutCarAnimationInit();
  servicesSlider();
  featuredSlider();
});
