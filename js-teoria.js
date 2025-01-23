<-----------------------------------------------JavaScript----------------------------------------------->

//////////////////////////////////////////////propiedades/////////////////////////////////////////////////
JavaScript es un lenguaje dinámicamente tipado Lo cual supone que la bariable se adaptara al tipo de dato.
Ámbito de bloque Una variable declarada con let solo es accesible dentro del bloque {} donde fue declarada.
No permite declarar bariables con el mismo nombre.
Las etiketas jaba esceipt se puede incluir dentoro de etiquetas css como h1 para darle formato

/////////////////////////////////////////////Terminos
deprecado // que se desaconseja su uso y se usa poco
obsoleto  // que ya no se usa no ni se puede usar


///////////////////////////////////////////////Bariables/////////////////////////////////////////////////
let x = 5; // Número
let y = "Hola"; // Cadena
let z = true; // Booleano
let obj = { nombre: "Juan" }; // Objeto
let lista = [1, 2, 3]; // Array

///////////////////////////////////////////////Operadores/////////////////////////////////////////////////

// Aritméticos
let suma = 5 + 3;
let resta = 5 - 3;
let multiplicacion = 5 * 3;
let division = 5 / 3;
let modulo = 5 % 3;
let potencia = 5 ** 3;
let incremento = incremento++;
let decremento = decremento--;

// Asignación
let x = 5;   // Asignación guarda el balor en la bariable
let x += 3;  // Asignación con suma
let x -= 3;  // Asignación con resta
let x *= 3;  // Asignación con multiplicación
let x /= 3;  // Asignación con división
let x %= 3;  // Asignación con módulo
let x **= 3; // Asignación con potencia

// Comparación
let igual = 5 == 3;         //igualda sinpel solo compara contenido
let identico = 5 === 3;     //igualdad estricta compara contenido y tipo de dato
let distinto = 5 != 3;      //diferente sinpel solo compara contenido
let mayor = 5 > 3;          //mayor que
let menor = 5 < 3;          //menor que
let mayorIgual = 5 >= 3;    //mayor o igual que
let menorIgual = 5 <= 3;    //menor o igual que

// Lógicos
let and = true && false; // AND
let or = true || false;  // OR
let not = !true;         // NOT

/////////////////////////////////////////////////////Condicionales///////////////////////////////////////////

//-----------------------------------------------------------if
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else if (edad >= 13) {
    console.log("Eres adolescente.");
} else {
    console.log("Eres menor de edad.");
}



//-----------------------------------------------------------Operador ternario if else
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);



//-----------------------------------------------------------for
for (let i = 0; i < 5; i++) {
    console.log(`Iteración número ${i}`);
}



//-----------------------------------------------------------for of
let numeros = [10, 20, 30];



for (let numero of numeros) {
    console.log(numero); // Imprime 10, 20, 30
}



//-----------------------------------------------------------for in
let persona = { nombre: "Juan", edad: 25 };

for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// Resultado:
// nombre: Juan
// edad: 25



//-----------------------------------------------------------while
let contador = 0;

while (contador < 5) {
    console.log(`Contador: ${contador}`);
    contador++;
}



//-----------------------------------------------------------do while
let numero = 0;

do {
    console.log(`Número: ${numero}`);
    numero++;
} while (numero < 3);



//-----------------------------------------------------------switch
let dia = 2;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Otro día");
}



//-----------------------------------------------------------try catch
try {
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    console.log("Ocurrió un error:", error.message);
}


////////////////////////////////////////////////funciones//////////////////////////////////////////////////
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

const suma_recibidos = function(a, b) {
    return a + b;
};

const nombreFuncion = (parametros) => {
    // Código de la función
    return valor;
};

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 2)); // Imprime: 8



saludar("Juan"); //ya mamiento a la funcion

<input type="button" onclick="cargarPeliculasDrama()" value="Genero Drama"/>//para llamarlo desde el html en este caso un boton

//////////////////////////////////////////////////////////////////modulos///////////////////////////////////////////////
// inportar modulos 
import { saludar } from "./funciones.js";
saludar();//usamos funcion inportada del modulo funciones.js

/////////////////////////////////////////////////////////////////funciones globales///////////////////////////////////////////////

alert("Hola, mundo!"); // Muestra un mensaje emergente
document.write("Hola, mundo!"); // Escribe en el documento HTML Hola mundo