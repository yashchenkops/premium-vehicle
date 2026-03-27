export function featuredSlider() {
  const logosContainer = document.querySelector('.featured__slider-logos');
  const featuredContainer = document.querySelector('.featured');
  const logos = document.querySelectorAll('.logo');
  const cars = document.querySelectorAll('.car');

  let activeIndex = 1;
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 3000;

  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  const SWIPE_THRESHOLD = 50;

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

  function prevSlide() {
    activeIndex = (activeIndex - 1 + logos.length) % logos.length;
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

  logosContainer.addEventListener('mousedown', startDrag);
  logosContainer.addEventListener('touchstart', startDrag);

  window.addEventListener('mousemove', onDrag);
  window.addEventListener('touchmove', onDrag);

  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);

  function startDrag(e) {
    isDragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    stopAutoplay();
  }

  function onDrag(e) {
    if (!isDragging) return;
    currentX = e.touches ? e.touches[0].clientX : e.clientX;
  }

  function endDrag() {
    if (!isDragging) return;

    const delta = currentX - startX;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    isDragging = false;
    startAutoplay();
  }

  featuredContainer.addEventListener('mouseenter', stopAutoplay);
  featuredContainer.addEventListener('mouseleave', startAutoplay);

  updatePositions();
  startAutoplay();
}
