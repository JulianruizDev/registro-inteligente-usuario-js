// Registro Inteligente de Usuario
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function main() {

  rl.question("Ingrese su nombre: ", function(nombre) {

    if (!validarNombre(nombre)) {
      rl.close();
      return;
    }

    rl.question("Ingrese su edad: ", function(edadInput) {

      if (!validarEdad(edadInput)) {
        rl.close();
        return;
      }

      let edad = Number(edadInput);

      let categoria = determinarCategoria(edad);

console.log("\nUsuario registrado correctamente");
console.log("-----------------------------");
      console.log("Nombre:", nombre);
      console.log("Edad:", edad);
      console.log("Categoria:", categoria);

      rl.close();

    });

  });

}