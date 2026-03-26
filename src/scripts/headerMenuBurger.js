export function burgerMenuOpen() {
  const headerBurger = document.querySelector('.header__burger');
  headerBurger.addEventListener('click', () => headerBurger.classList.toggle('is-active'));
}