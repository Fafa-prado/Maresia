document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-container img");
    const dots = document.querySelectorAll(".dot");
    const nextButton = document.querySelector(".next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (dots[i]) dots[i].classList.remove("active"); // Evita erro caso os dots não existam
        });

        slides[index].classList.add("active");
        if (dots[index]) dots[index].classList.add("active");
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    // Verifica se o botão existe antes de adicionar o evento
    if (nextButton) {
        nextButton.addEventListener("click", function () {
            nextSlide();
        });
    }

    // Continua mudando automaticamente a cada 5 segundos
    setInterval(nextSlide, 5000);
});