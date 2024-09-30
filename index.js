// Get references to the hamburger button, close button, and mobile navigation
const openMenuBtn = document.querySelector(".open-menu"); // Hamburger button
const closeMenuBtn = document.querySelector(".close-menu"); // Close button in header
const mobileNav = document.querySelector(".mobile-nav"); // Mobile nav

// Function to open the mobile nav
function openMobileNav() {
  mobileNav.style.animation = "slideIn 0.3s forwards";
  mobileNav.classList.add("open");
  openMenuBtn.style.display = "none"; // Hide hamburger button when menu is open
  closeMenuBtn.style.display = "block"; // Show the close button when menu is open
}

// Function to close the mobile nav
function closeMobileNav() {
  mobileNav.style.animation = "slideOut 0.3s forwards";
  setTimeout(() => {
    mobileNav.classList.remove("open");
  }, 300); // Match the animation duration
  openMenuBtn.style.display = "block"; // Show hamburger button when menu is closed
  closeMenuBtn.style.display = "none"; // Hide close button when menu is closed
}

// Open the menu when the hamburger button is clicked
openMenuBtn.addEventListener("click", openMobileNav);

// Close the menu when the close button is clicked
closeMenuBtn.addEventListener("click", closeMobileNav);

// Initially hide the close button
closeMenuBtn.style.display = "none";
