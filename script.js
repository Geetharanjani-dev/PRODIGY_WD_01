// When the user scrolls, change the background color of the navbar
window.onscroll = function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  