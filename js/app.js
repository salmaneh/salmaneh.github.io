/*


An Immediately Invoked Function Expression (IIFE) in JavaScript is defined as follows:

(function () {
  // code to be executed immediately
})();

The function expression is wrapped in parentheses () to indicate that it's an expression, and the parentheses () at the end of the expression indicate that the function should be immediately invoked. The function is anonymous, and its result is not saved in a variable, which makes it suitable for one-time use cases such as setting up a local scope for variables, encapsulating code, or creating a closure.
*/
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------- */

/*
                  -------------------------EXPLANATION OF THE BELOW JAVASCRIPT code---------------------------
                  
This code defines an anonymous function and immediately runs it.

The given code is an immediately invoked function expression (IIFE) in JavaScript. It's a function that's executed immediately after it's defined. The purpose of using an IIFE is to create a private scope for the function, so that the variables and functions defined inside it are not accessible from outside the function.

The code is setting up event listeners for buttons with the class "control". When these buttons are clicked, the code removes the "active-btn" class from the currently active button and adds it to the button that was just clicked. The code also removes the "active" class from the currently active element and adds it to the element associated with the button that was just clicked (determined by the "dataset.id" property of the button).

The code is also setting up an event listener for a button with the class "theme-btn". When this button is clicked, the code toggles the "light-mode" class on the document body.

The function is called at the end of the code by adding () after the definition of the function, causing it to be invoked immediately.

(function () {
  ...
})();

This is called an immediately invoked function expression (IIFE). The function is defined and executed immediately, so there is no need for a separate function call.

*/

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

//for matrix
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.getElementById("matrix").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 6;
  }, 30);
};
