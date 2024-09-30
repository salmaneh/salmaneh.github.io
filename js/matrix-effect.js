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
}, 8000);
