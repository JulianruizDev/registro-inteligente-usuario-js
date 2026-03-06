// Registro Inteligente de Usuario
// --------------------------------------------------
// ARCHIVO PRINCIPAL DEL SISTEMA
// Este archivo controla el flujo del programa.
// Las validaciones y lógica del negocio
// se encuentran separadas en la carpeta services.
// --------------------------------------------------
const readline = require("readline");

const validarNombre = require("./services/validarNombre");
const validarEdad = require("./services/validarEdad");
const determinarCategoria = require("./services/determinarCategoria");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirNombre() {

  rl.question("Ingrese su nombre: ", function(nombre) {

    let resultadoNombre = validarNombre(nombre);

    if (!resultadoNombre.valido) {
      console.log(resultadoNombre.error);
      return pedirNombre();
    }

    pedirEdad(resultadoNombre.nombre);

  });

}

function pedirEdad(nombre) {

  rl.question("Ingrese su edad: ", function(edadInput) {

  let resultadoEdad = validarEdad(edadInput);

if (!resultadoEdad.valido) {
  console.log(resultadoEdad.error);
  return pedirEdad(nombre);
}

let edad = resultadoEdad.edad;

    if (edad < 18) {
      console.log("El usuario debe ser mayor de edad");
      return pedirEdad(nombre);
    }

let categoria = determinarCategoria(edad);

let fecha = new Date();

console.log("\nUsuario registrado correctamente");
console.log("-----------------------------");
console.log("Fecha de registro:", fecha.toLocaleString());
console.log("\nDatos del usuario");
console.log("---------------------");
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Categoría:", categoria);
rl.close();

  });

}

function main() {

  console.log("=================================");
  console.log("     Sistema de Registro de Usuario");
  console.log("=================================");

  pedirNombre();
}

main();