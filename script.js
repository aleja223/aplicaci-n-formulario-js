document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  //validar campo nombre
  let entradaNombre = document.getElementById("name");
  let errorNombre = document.getElementById("nameError");
  if (entradaNombre.value.trim() === "") {
    errorNombre.textContent = "Introduce tu nombre";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }
  //validar campo correo
  let emailEntrada = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = "Introduce un email valido";
    emailError.classList.add('error-message"');
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }
  //validar contraseña
  let contrasenaEntrada = document.getElementById("password");
  let contrasenaError = document.getElementById("passwordError");
  let contrasenaPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
  if (!contrasenaPattern.test(contrasenaEntrada.value)) {
    contrasenaError.textContent =
      "La contraseña debe contener al menos 8 caracteres, numeros, mayusculas, minusculas y caracteres especiales";
    contrasenaError.classList.add('error-message"');
  } else {
    contrasenaError.textContent = "";
    contrasenaError.classList.remove("error-message");
  }
  //si todos los campos son validos enviar formulario
  if (
    !errorNombre.textContent &&
    !emailError.textContent &&
    !contrasenaError.textContent
  ) {
    alert("El formulario se ha enviado con exito");
    document.getElementById("formulario").requestFullscreen();
  }
});
