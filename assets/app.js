
// --- Mobile Nav Controller ---
var DEFAULT_OPEN_ON_MOBILE = false; // set true to start open on phones

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.querySelector('.nav');
  var backdrop = document.getElementById('navBackdrop');
  var main = document.querySelector('main');

  function openNav() {
    if (nav) nav.classList.add('open');
    if (backdrop) backdrop.classList.add('show');
  }
  function closeNav() {
    if (nav) nav.classList.remove('open');
    if (backdrop) backdrop.classList.remove('show');
  }
  function isMobile() { return window.innerWidth < 960; }

  // initial state
  if (isMobile()) {
    DEFAULT_OPEN_ON_MOBILE ? openNav() : closeNav();
  }

  // toggle with hamburger
  if (btn) {
    btn.addEventListener('click', function () {
      if (!nav) return;
      var willOpen = !nav.classList.contains('open');
      willOpen ? openNav() : closeNav();
    });
  }

  // close when tapping backdrop
  if (backdrop) backdrop.addEventListener('click', closeNav);

  // close when tapping any link inside the nav on mobile
  if (nav) {
    nav.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'A' && isMobile()) { closeNav(); }
    });
  }

  // close when tapping main content on mobile
  if (main) {
    main.addEventListener('click', function () { if (isMobile()) closeNav(); });
  }

  // close on Escape key
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

  // on resize: clear overlay state for desktop
  window.addEventListener('resize', function () {
    if (!isMobile()) {
      if (backdrop) backdrop.classList.remove('show');
      if (nav) nav.classList.remove('open');
    } else {
      // re-apply default if switching to mobile
      if (DEFAULT_OPEN_ON_MOBILE) openNav(); else closeNav();
    }
  });
});
