function validarNombre(nombreInput) {

  let nombre = nombreInput.trim();

  if (nombre === "") {
    console.log("Nombre vacío");
    return false;
  }

  if (nombre.includes(" ")) {
    console.log("El nombre no debe contener espacios");
    return false;
  }

  if (nombre.length < 3) {
    console.log("Nombre demasiado corto");
    return false;
  }

  return true;

}

module.exports = validarNombre;