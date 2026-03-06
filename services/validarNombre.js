function validarNombre(nombreInput) {

  let nombre = nombreInput.trim();

  if (nombre === "") {
    console.log("Nombre vacío");
    return false;
  }

  const patronSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

  if (!patronSoloLetras.test(nombre)) {
    console.log("El nombre solo puede contener letras");
    return false;
  }

  if (nombre.length < 3) {
    console.log("Nombre demasiado corto");
    return false;
  }

  return true;

}

module.exports = validarNombre;