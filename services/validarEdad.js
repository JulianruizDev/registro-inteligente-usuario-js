function validarEdad(edadInput) {

  let edad = Number(edadInput);

if (edad < 18) {
  console.log("El usuario debe ser mayor de edad para registrarse");
  rl.close();
  return;
}

let categoria = determinarCategoria(edad);

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