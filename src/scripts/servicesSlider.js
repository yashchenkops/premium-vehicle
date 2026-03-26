import Swiper from 'swiper';
import { Navigation, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export function sliderInit() {
  const swiper = new Swiper('.services__slider', {
    modules: [Navigation, EffectFade],
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
  });
}
