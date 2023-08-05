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

  // Display the popup after a delay (e.g., 5 seconds)
  setTimeout(function () {
    popupOverlay.style.display = "block";
  }, 5000); // Adjust the delay (in milliseconds) as needed
});

// Function to close the popup when clicking outside of it
window.addEventListener("click", function (event) {
  var popupOverlay = document.getElementById("popup-overlay");
  if (event.target === popupOverlay) {
    closePopup();
  }
});
