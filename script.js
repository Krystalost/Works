document.querySelector('.animated-box .logo').addEventListener('dragstart', function (e) { e.preventDefault(); });
document.querySelector('.animated-box .logo').addEventListener('mousedown', function (e) { e.preventDefault(); });
document.querySelector('.animated-box .logo').addEventListener('touchstart', function (e) { e.preventDefault(); });

document.querySelectorAll('.icon-wrapper img').forEach(function (img) {
  img.addEventListener('dragstart', function (e) { e.preventDefault(); });
  img.addEventListener('mousedown', function (e) { e.preventDefault(); });
  img.addEventListener('touchstart', function (e) { e.preventDefault(); });
});
