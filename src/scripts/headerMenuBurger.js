export function burgerMenuOpen() {
  const headerBurger = document.querySelector('.header__burger');
  const insideMenuLinks = document.querySelectorAll('.header__nav-link');

  headerBurger.addEventListener('click', (e) => {
    e.stopPropagation();
    headerBurger.classList.toggle('is-active');
  });

  insideMenuLinks.forEach((item) => {
    item.addEventListener('click', () => headerBurger.classList.remove('is-active'));
  });

  document.addEventListener('click', (e) => {
    const isClickInsideBurger = e.target.closest('.header__burger');
    const isClickInsideMenu = e.target.closest('.header__nav');

    if (!isClickInsideBurger && !isClickInsideMenu) {
      headerBurger.classList.remove('is-active');
    }
  });
}
