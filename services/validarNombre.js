function validarNombre(nombreInput) {

  let nombre = nombreInput.trim();

  if (nombre === "") {
    return { valido: false, error: "Nombre vacío" };
  }

  const patronSoloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

  if (!patronSoloLetras.test(nombre)) {
    return { valido: false, error: "El nombre solo puede contener letras" };
  }

  if (nombre.length < 3) {
    return { valido: false, error: "Nombre demasiado corto" };
  }

  nombre =
    nombre.charAt(0).toUpperCase() +
    nombre.slice(1).toLowerCase();

  return {
    valido: true,
    nombre: nombre
  };
}

module.exports = validarNombre;