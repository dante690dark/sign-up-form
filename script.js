document.addEventListener("DOMContentLoaded", () => {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const form = document.querySelector("form");

  const validPassword = () => {
    confirmPassword.style.border = "2px solid green";
      confirmPassword.style.backgroundColor = "rgba(40, 167, 69, 0.1)";
  }

  const invalidPassword = () => {
    confirmPassword.style.border = "2px solid red";
    confirmPassword.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
  }

  const validatePasswords = () => {

    if (confirmPassword.value === "") return;
  
    confirmPassword.value !== password.value ? invalidPassword() : validPassword();
  }

  password.addEventListener("input", validatePasswords);
  confirmPassword.addEventListener("focus", validatePasswords);
  confirmPassword.addEventListener("input", validatePasswords);

  form.addEventListener("submit",  (event) => {
    if (form.checkValidity()) {
      event.preventDefault();
      console.log("✅ Formulario válido, enviando datos...");
    }
    else {
      event.preventDefault();
      console.error("❌ Formulario inválido, evitando envío.");
    }
  });
});
