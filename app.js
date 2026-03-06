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

function main() {

  rl.question("Ingrese su nombre: ", function(nombre) {

let resultadoNombre = validarNombre(nombre);

if (!resultadoNombre.valido) {
  rl.close();
  return;
}

nombre = resultadoNombre.nombre;

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

main();