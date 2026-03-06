// Regla del sistema: solo usuarios mayores de edad pueden registrarse

function validarEdad(edadInput) {

  let edad = Number(edadInput);

  if (Number.isNaN(edad)) {
    return { valido: false, error: "Edad inválida" };
  }

  if (edad < 0 || edad > 120) {
    return { valido: false, error: "Edad fuera de rango" };
  }

  if (edad < 18) {
    return { valido: false, error: "El usuario debe ser mayor de edad para registrarse" };
  }

  return { valido: true, edad: edad };

}

module.exports = validarEdad;