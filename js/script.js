let currentSlide = 0;
const slides = document.querySelectorAll('.slidersection');
const totalSlides = slides[0].children.length; // Considera o número de cartões na seção

function showSlide(index) {
  // Calcula a largura total da slidersection (considerando o gap entre os cards)
  const slideWidth = slides[0].offsetWidth;
  const distance = -index * slideWidth;

  // Aplica a transição horizontal
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${distance}px)`;
  });
}

function plusSlides(n) {
  currentSlide = (currentSlide + n + totalSlides) % totalSlides; // Garante que não ultrapasse os limites
  showSlide(currentSlide);
}

// Inicializa exibindo o primeiro slide
showSlide(currentSlide);
