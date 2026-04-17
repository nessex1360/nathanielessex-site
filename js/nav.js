(function () {
  const btn = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
})();
