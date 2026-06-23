/**
 * TRABAJO PRÁCTICO N°1: Introducción a Node.js
   
   Nombre Completo: 
 */

// ==========================================
// DECLARACIÓN DE VARIABLES (const, let, var)
// ==========================================

// Tu código aqui...
const nombre = "lautaro";
let edad = 19;
var ciudad = "simoca";


// ==========================================
// ESTRUCTURAS DE DATOS (Objeto y Array)
// ==========================================

// Tu código aqui...
const persona = {
    nombre: "lautaro",
    edad: 19,
    ciudad: "simoca"
};


// ==========================================
// LÓGICA (Funciones)
// ==========================================

// Tu código aqui...
function saludar() {
  console.log("presentacion")
  console.log("Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".");
}

function evaluarMaterias() {
  if (materias.length > 3) {
    console.log("cuatrimestre completo");
  } else {
    console.log("cuatrimestre incompleto");
  }
}
// ==========================================
//EJECUCIÓN
// ==========================================

// Invocación de las funciones aqui...
saludar();
evaluarMaterias();