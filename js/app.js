// Function to close the popup
function closePopup() {
  document.getElementById("popup-overlay").style.display = "none";
}

// Function to show the popup when the page loads
document.addEventListener("DOMContentLoaded", function () {
  var popupOverlay = document.getElementById("popup-overlay");
  var popupMessage = document.getElementById("popup-message");
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    popupMessage.innerHTML =
      "<i class='fa-solid fa-lightbulb fa-beat'></i>&ensp;<b>Did you know?</b><br>This portfolio will also look great on <b>desktop.</b>&emsp;<button id='ok-button' onclick='closePopup()'> <i class='fa-solid fa-check fa-xl'></i></button>";
  } else {
    popupMessage.innerHTML =
      "<i class='fa-solid fa-lightbulb fa-beat'></i>&ensp;<b>Did you know?</b><br>This portfolio will also look great on <b>mobile.</b>&emsp;<button id='ok-button' onclick='closePopup()'> <i class='fa-solid fa-check fa-xl'></i> </button>";
  }

  // Display the popup after a delay (e.g., 3 seconds)
  setTimeout(function () {
    popupOverlay.style.display = "block";
  }, 2500); // Adjust the delay (in milliseconds) as needed
});

// Function to close the popup when clicking outside of it
window.addEventListener("click", function (event) {
  var popupOverlay = document.getElementById("popup-overlay");
  if (event.target === popupOverlay) {
    closePopup();
  }
});

// Immediately Invoked Function Expression (IIFE)
(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

// Function to run the animation
function runAnimation(target) {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 6;
  }, 30);
}

// Run the animation after 1 second of page load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const target = document.getElementById("matrix");
    runAnimation(target);
  }, 1000);
});

// Run the animation again after 5 seconds
setTimeout(() => {
  const target = document.getElementById("matrix");
  runAnimation(target);
}, 5000);
