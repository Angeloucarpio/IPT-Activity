(function () {
  emailjs.init("bK5nVJ3nP11ftMzh4");
})();

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("service_391karm", "YOUR_TEMPLATE_ID", this).then(
        function () {
          showMessage("Thank you! Your email has been sent.", "success");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          showMessage(
            "Failed to send email: " + JSON.stringify(error),
            "error"
          );
        }
      );
    });
});

function showMessage(message, type) {
  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;
  outputMessage.className =
    "output-message " + (type === "success" ? "success" : "error");
  outputMessage.style.display = "block";
}
