let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slidersection");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let s of slides) {
    s.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}