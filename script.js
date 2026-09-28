const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

function setMenuState(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  siteNav.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

document.addEventListener('click', (event) => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen && !siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
    setMenuState(false);
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 700) setMenuState(false);
});
