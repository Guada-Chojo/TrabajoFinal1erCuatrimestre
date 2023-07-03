const esEmailValido = (email) => {
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  return emailRegex.test(email)
}

const validarNombre = () => {
  const nombreInput = document.getElementById('nombre');
  if (nombreInput.value.trim() == "") {
    // error de required
    document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
    nombreInput.classList.add('is-invalid');
  } else if (nombreInput.value.trim().length < 5) {
    // error de minLength
    document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
    nombreInput.classList.add('is-invalid');
  } else {
    document.getElementById('error-nombre').innerHTML = "";
    nombreInput.classList.remove('is-invalid');
  }
}


const enviarFormulario = () => {
  let formularioCorrecto = true;
  const nombreInput = document.getElementById('nombre');
  if (nombreInput.value.trim() == "") {
    // error de required
    document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
    formularioCorrecto = false;
  } else if (nombreInput.value.trim().length < 5) {
    // error de minLength
    document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-nombre').innerHTML = "";
  }

  const emailInput = document.getElementById('email');
  if (emailInput.value.trim() == "") {
    // error de required
    document.getElementById('error-email').innerHTML = "El email es requerido";
    formularioCorrecto = false;
  } else if (!esEmailValido(emailInput.value)) {
    // error de minLength
    document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-email').innerHTML = "";
  }

  const notificaciones = document.getElementById("notificaciones");
  if (formularioCorrecto) {
    console.log("Nombre:", nombreInput.value);
    console.log("Email:", emailInput.value);
    console.log("Recibe Notificaciones:", notificaciones.checked);
  } else {
    console.log("Formulario incorrecto")
  }

}

const inicializarJs = () => {
  const boton = document.getElementById("enviar-btn");
  boton.addEventListener('click', function (e) {
    enviarFormulario();
  });

  document.getElementById('nombre').addEventListener('blur', function (e) {
    validarNombre();
  })

}

window.addEventListener('load', inicializarJs);