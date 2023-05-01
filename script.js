let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  hamburger.classList.toggle('lines-rotate');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.toggle('hide');
  });
}
