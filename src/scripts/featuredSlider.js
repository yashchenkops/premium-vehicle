export function featuredSlider() {
  const logos = document.querySelectorAll('.logo');
  const cars = document.querySelectorAll('.car');
  const container = document.querySelector('.featured');

  let activeIndex = 1;
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 3000;

  function updatePositions() {
    const radius = 120;
    const step = 120;

    logos.forEach((el, i) => {
      const offset = i - activeIndex;
      const angle = offset * step;

      const x = Math.sin((angle * Math.PI) / 180) * radius;
      const y = Math.cos((angle * Math.PI) / 180) * 30;

      const scale = i === activeIndex ? 1.3 : 0.7;

      el.style.transform = `
        translate(-50%, -50%)
        translate(${x}px, ${y}px)
        scale(${scale})
      `;

      el.classList.toggle('active', i === activeIndex);
    });

    cars.forEach((car, i) => {
      car.classList.toggle('active', i === activeIndex);
    });
  }

  function nextSlide() {
    activeIndex = (activeIndex + 1) % logos.length;
    updatePositions();
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  }

  logos.forEach((el, i) => {
    el.addEventListener('click', () => {
      activeIndex = i;
      updatePositions();
      startAutoplay();
    });
  });

  // hover pause (як у swiper)
  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  // старт
  updatePositions();
  startAutoplay();
}
