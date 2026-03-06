// Registro Inteligente de Usuario

function validarNombre(nombre) {
  return nombre.length >= 3;
}

function validarEdad(edad) {
  return edad >= 0 && edad <= 120;
}

function determinarCategoria(edad) {

  if (edad <= 12) return "Niño";
  if (edad <= 17) return "Adolescente";
  if (edad <= 64) return "Adulto";

  return "Tercera edad";
}

function main() {

  let nombre = "Julian";
  let edad = 23;

  if (!validarNombre(nombre)) {
    console.log("Nombre inválido");
    return;
  }

  if (!validarEdad(edad)) {
    console.log("Edad inválida");
    return;
  }

  let categoria = determinarCategoria(edad);

  console.log("Usuario registrado");
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("Categoria:", categoria);
}

main();