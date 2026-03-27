export function burgerMenuOpen() {
  const headerBurger = document.querySelector('.header__burger');

  headerBurger.addEventListener('click', (e) => {
    e.stopPropagation();
    headerBurger.classList.toggle('is-active');
  });

  document.addEventListener('click', (e) => {
    const isClickInsideBurger = e.target.closest('.header__burger');
    const isClickInsideMenu = e.target.closest('.header__nav');

    if (!isClickInsideBurger && !isClickInsideMenu) {
      headerBurger.classList.remove('is-active');
    }
  });
}