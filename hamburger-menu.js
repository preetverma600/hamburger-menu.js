// Select the elements
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

// Add event listener to the burger menu icon
burgerMenu.addEventListener('click', () => {
  // Toggle the "show-nav" class on the nav element
  nav.classList.toggle('show-nav');

  function toggleNav() {
    console.log('toggleNav called');

  // Animate the burger menu icon
  burgerMenu.classList.toggle('open');
});




// Hide the nav menu when a link is clicked (on smaller screens)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show-nav');
    burgerMenu.classList.remove('open');
  });
});
