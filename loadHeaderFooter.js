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