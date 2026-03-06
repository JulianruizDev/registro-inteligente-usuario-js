function validarEdad(edadInput) {

  let edad = Number(edadInput);

  if (Number.isNaN(edad)) {
    console.log("Edad inválida");
    return false;
  }

  if (edad < 0 || edad > 120) {
    console.log("Edad fuera de rango");
    return false;
  }

  return true;

}

module.exports = validarEdad;