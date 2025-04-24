// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelectorAll(".slide");
//   const progressBars = document.querySelectorAll(".progress-bar");
//   let currentSlide = 0;
//   let interval;

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.remove("active");
//       progressBars[i].classList.remove("active");
//     });

//     slides[index].classList.add("active");
//     progressBars[index].classList.add("active");
//     currentSlide = index;
//   }

//   function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
//   }

//   function startSlideshow() {
//     showSlide(currentSlide);
//     interval = setInterval(nextSlide, 5000);
//   }

//   // Adiciona o evento de clique nas barras de progresso
//   progressBars.forEach((bar, index) => {
//     bar.addEventListener("click", () => {
//       clearInterval(interval); // Para a troca automática
//       showSlide(index);        // Vai direto pro slide clicado
//       startSlideshow();        // Reinicia o slideshow
//     });
//   });

//   startSlideshow();
// });


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const progressBars = document.querySelectorAll(".progress-bar");
  let currentSlide = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      progressBars[i].classList.remove("active");
      progressBars[i].classList.add("reset"); // Adiciona reset nas barras não clicadas
    });

    slides[index].classList.add("active");
    progressBars[index].classList.add("active");
    progressBars[index].classList.remove("reset"); // Remove o reset da barra clicada
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlideshow() {
    showSlide(currentSlide);
    interval = setInterval(nextSlide, 5000);
  }

  // Inicializa todas as barras com "reset" para começar com a animação zerada
  progressBars.forEach((bar) => {
    bar.classList.add("reset");
  });

  // Adiciona o evento de clique nas barras de progresso
  progressBars.forEach((bar, index) => {
    bar.addEventListener("click", () => {
      clearInterval(interval); // Para a troca automática
      showSlide(index);        // Vai direto pro slide clicado
      startSlideshow();        // Reinicia o slideshow
    });
  });

  startSlideshow();
});
