// Function to handle the share button click event
function handleShare() {
  if (navigator.share) {
    // Use Web Share API if supported
    navigator
      .share({
        title: "Salman's Portfolio",
        text: "Check out my awesome portfolio!",
        url: window.location.href,
      })
      .then(() => console.log("Share successful"))
      .catch((error) => console.error("Error sharing:", error));
  } else {
    // Fallback: Show custom share popup
    alert(
      "Sharing is not supported on this browser. You can copy the URL to share."
    );
  }
}

// Add a click event listener to the share button
document.getElementById("share-button").addEventListener("click", handleShare);
