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

//for #matrix
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let interval = null;
// document.getElementById("matrix").onmouseover = (event) => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if (index < iteration) {
//           return event.target.dataset.value[index];
//         }

//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iteration >= event.target.dataset.value.length) {
//       clearInterval(interval);
//     }

//     iteration += 1 / 6;
//   }, 30);
// };

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
