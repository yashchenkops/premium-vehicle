import { burgerMenuOpen } from './headerMenuBurger';
import { sectionAboutCarAnimationInit } from './aboutAnimation';
import { sliderInit } from './servicesSlider';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenuOpen();
  sectionAboutCarAnimationInit();
  sliderInit();
});
