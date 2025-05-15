// Retrieve stored name on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("username");
  if (savedName) {
    document.getElementById("username").textContent = savedName;
  }
});

// Save user name to localStorage
document.getElementById("saveBtn").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value;
  if (nameInput.trim()) {
    localStorage.setItem("username", nameInput.trim());
    document.getElementById("username").textContent = nameInput.trim();
    alert("Name saved!");
  }
});

// Animate box on click
const box = document.getElementById("animateBox");
box.addEventListener("click", () => {
  box.classList.add("animate");
  setTimeout(() => {
    box.classList.remove("animate");
  }, 600); // Remove animation class after it ends
});
