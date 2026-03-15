// back to top button
let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// after user click
function jumpTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function hamburger() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}