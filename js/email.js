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
  // or
  // if (!name || !email || !subject || !message) {
  //   alert("Please fill out all required fields.");
  //   return;
  // }

  // var params = {
  //   name: document.getElementById("name").value,
  //   email: document.getElementById("email").value,
  //   subject: document.getElementById("subject").value,
  //   message: document.getElementById("message").value,
  // };

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
    })
    .catch((err) => {
      console.log(err);

      // hide spinner and show error message
      document.getElementById("spinner").style.display = "none";
      document.getElementById("error-message").style.display = "block";
    });
}
