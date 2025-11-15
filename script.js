const menuIcon = document.querySelector('.right-nav svg');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu visibility on click
  menuIcon.addEventListener('click', (e) => {
    e.preventDefault()
     navLinks.classList.toggle('show');
  });

  // Close menu when clicking outside
//   document.addEventListener('click', (e) => {
//     if (!e.target.closest('.right-nav') && !e.target.closest('.nav-links')) {
//       navLinks.classList.remove('show');
//     }
//   });