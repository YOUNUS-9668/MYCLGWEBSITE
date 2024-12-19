let slideIndex = 0; // Current slide index
const slides = document.querySelectorAll('.slide'); // Select all slides

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none'); // Hide all slides
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; // Loop back to the first slide
    slides[slideIndex - 1].style.display = 'block'; // Show the current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides(); // Start the slideshow