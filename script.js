
let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
let slideInterval = setInterval(showNextSlide, 3000); // Change image every 3 seconds

function showSlide(index) {
    // Hide all images
    slides.forEach((slide, idx) => {
        slide.style.opacity = idx === index ? "1" : "0";
    });
    currentIndex = index;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function nextSlide() {
    clearInterval(slideInterval); // Stop the auto slide
    showNextSlide();
    slideInterval = setInterval(showNextSlide, 3000); // Restart auto slide
}

function prevSlide() {
    clearInterval(slideInterval); // Stop the auto slide
    showPrevSlide();
    slideInterval = setInterval(showNextSlide, 3000); // Restart auto slide
}

// Initialize the first slide to be visible
showSlide(currentIndex);

// loadHeaderFooter.js
function loadHeaderFooter() {
    // Load header
    fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;
      })
      .catch(error => console.error("Error loading header:", error));
  
    // Load footer
    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(error => console.error("Error loading footer:", error));
  }
  
  // Call the function on page load
  document.addEventListener("DOMContentLoaded", loadHeaderFooter);
  