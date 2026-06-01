document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', nav.classList.contains('nav--open'));
    });
  }
});
