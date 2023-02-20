function sendMail(event) {
  event.preventDefault(); // prevent form submission and page reload

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
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
    })
    .catch((err) => {
      console.log(err);

      // hide spinner and show error message
      document.getElementById("spinner").style.display = "none";
      document.getElementById("error-message").style.display = "block";
    });
}
