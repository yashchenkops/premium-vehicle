import Swiper from 'swiper';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function servicesSlider() {
  const swiper = new Swiper('#servicesSlider', {
    modules: [Navigation, EffectFade, Autoplay],

    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoHeight: false,
    loop: true,
    speed: 600,
    allowTouchMove: false,
    navigation: {
      nextEl: '.services__slider-next',
      prevEl: '.services__slider-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}
