//import "../resources/sass/main";
import "../resources/css/main";

console.log("Hello");

//Menu

const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");
const mmButton = document.querySelector("#mm-button");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.style.transition = "ease in out, 2s";
});

mmButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.style.transition = "ease in out, 2s";
});

// PORTFOLIO SLIDE //
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
