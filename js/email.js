// validate Email
function validateEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    emailInput.value = "";
  }
}

function sendMail(event) {
  event.preventDefault(); // prevent form submission and page reload

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Check if form inputs are not empty
  if (
    name.trim() === "" ||
    email.trim() === "" ||
    subject.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Please fill out all required fields.");
    return;
  }

  // Create email parameters
  var params = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const serviceID = "service_7wstq8b";
  const templateID = "template_3r1h3du";

  // show loading spinner
  document.getElementById("spinner").style.display = "block";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // after sending the form, clear the form values
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);

      // hide spinner and show success message
      document.getElementById("spinner").style.display = "none";
      document.getElementById("success-message").style.display = "block";

      // hide success message after 9 seconds
      setTimeout(function () {
        document.getElementById("success-message").style.display = "none";
      }, 9000);
    })
    .catch((err) => {
      console.log(err);

      // hide spinner and show error message
      document.getElementById("spinner").style.display = "none";
      document.getElementById("error-message").style.display = "block";

      // hide error message after 9 seconds
      setTimeout(function () {
        document.getElementById("error-message").style.display = "none";
      }, 9000);
    });
}

