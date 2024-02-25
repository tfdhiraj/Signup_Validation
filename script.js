const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reset error messages
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name cannot be empty.";
  } else if (!/^[a-zA-Z0-9]{3,20}$/.test(name)) {
    document.getElementById("nameError").textContent = "Invalid Name.";
  }

  // Validate Email
  if (email === "") {
    document.getElementById("emailError").textContent =
      "Email cannot be empty.";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter valid email.";
  }

  // Validate Password
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password cannot be empty.";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be between 6-10 characters long with at least one number, one uppercase and one lowercase letter.";
  }

  // Validate Confirm Password
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Confirm Password cannot be empty.";
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords don't match.";
  }

  // If no errors, alert successful sign-up
  if (name && email && password && confirmPassword) {
    alert("Sign up successful! Hello user! You have successfully signed up.");
  }
});
