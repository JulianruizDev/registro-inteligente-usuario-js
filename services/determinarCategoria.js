function determinarCategoria(edad) {

  if (edad <= 12) {
    return "Niño";
  }

  if (edad <= 17) {
    return "Adolescente";
  }

  if (edad <= 64) {
    return "Adulto";
  }

  return "Tercera edad";

}

module.exports = determinarCategoria;