let inputsContainer = document.querySelector(".input-container");
message = document.createElement("p");
email = document.querySelector('input[name="email"]');
emailMessage = document.createTextNode("Looks like this is not an email");
emptyMessage = document.createTextNode("Email Address cannot be empty");
validEmail = /\w+@\w+.\w+/;

document.forms[0].onsubmit = function (e) {
  if (
    email.value === "" ||
    (email.value !== "" && !validEmail.test(email.value))
  ) {
    e.preventDefault();
    document.forms[0].classList.add("error");
    email.classList.add("error");
    if (message.textContent.length !== 0) message.textContent = "";
    if (email.parentElement.querySelector("p") !== null)
      email.parentElement.querySelector("p").remove();
    if (email.value !== "" && !validEmail.test(email.value)) {
      email.value = "";
      email.setAttribute("placeholder", "email@example/com");
      theMessage = emailMessage;
    } else {
      if (validEmail.test(email.value)) {
        email.classList.remove("error");
        inputsContainer.querySelector("p").remove();
      }
      theMessage = emptyMessage;
    }
    message.appendChild(theMessage);
    inputsContainer.appendChild(message.cloneNode(true));
  }
};
