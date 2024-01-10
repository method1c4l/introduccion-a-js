// TAREA 1:
// Crear una función que tome como parámetro el año actual y el año de nacimiento, y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables.
// Ejecutar la función con estos datos.
// Imprimir el resultado en la consola.

/*
const anioActual = Number(prompt('Ingrese el año actual'));
const anioNacimiento = Number(prompt('Ingrese el año de su nacimiento'));

function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const edadUsuario = calcularEdad(anioActual, anioNacimiento);

console.log('Usted tiene, más o menos, ' + edadUsuario + ' años.');
*/


// TAREA 2:
// Preguntar el salario mensual y calcular el salario anual, semanal, diario y por hora.
// Imprimir el resultado en la consola.

const salarioMensual = Number(prompt('Ingrese su salario mensual'));


function calcularSalarioAnual(salarioMensual) {
    const MESES_EN_ANIO = 12;

    return salarioMensual * MESES_EN_ANIO;
}

function calcularSalarioSemanal(salarioAnual) {
    const SEMANAS_EN_ANIO = 52;

    return salarioAnual / SEMANAS_EN_ANIO;
}

function calcularSalarioDiario(salarioAnual) {
    const DIAS_EN_ANIO = 365;

    return salarioAnual / DIAS_EN_ANIO;
}

function calcularSalarioHora(salarioAnual) {
    const HORAS_EN_ANIO = 8760;

    return salarioAnual / HORAS_EN_ANIO;
}


const salarioAnual = calcularSalarioAnual(salarioMensual);
console.log('Su salario anual es: ' + salarioAnual);

console.log('Su salario mensual es: ' + salarioMensual);

const salarioSemanal = calcularSalarioSemanal(salarioAnual);
console.log('Su salario semanal es: ' + salarioSemanal.toFixed(2));

const salarioDiario = calcularSalarioDiario(salarioAnual);
console.log('Su salario diario es: ' + salarioDiario.toFixed(2));

const salarioHora = calcularSalarioHora(salarioAnual);
console.log('Su salario por hora es: ' + salarioHora.toFixed(2));



/* Type Casting */

// Typecasting (type conversion) in JavaScript is the conversion of one data type into another data type.
// For example, a number to a string: String(23) = '23'


/* Function Contract */

// A function contract provides precise information on what a function accomplishes.
// It is a statement of the problem that the function solves.

// It is NOT a description of the function body, or of how the funcion works.


/* Single Responsibility Principle */

// Is a computer programming principle that states that:
// "A module should be responsible to one, and only one, actor".

// Las variables globales rompen el principio de responsabilidad única.



/* SCOPE */

// Variable hoisting (izar):

// console.log(hola); // Falla porque no está definida.

// console.log(mensaje); // No falla, pero muestra undefined... Por qué?
// var mensaje = 'Hola Mundo!';
// console.log(mensaje); // Hola Mundo!

// Y con let?
// let mensaje = 'Hola Mundo!';
// console.log(mensaje); // error


// Function hoisting:

// pruebaHoisting(); // Funciona!

// function pruebaHoisting(){
//     console.log('Prueba, 1, 2, 3...');
// }

// pruebaHoisting();



// var a = 1; // Global
// let b = 2; // Global

// // let z; // Global

// function prueba(c) { // c es un parámetro de la función prueba. Local.
//     let d = 4; // Local a la función.

//     // console.log(z); // undefined // JavaScript siempre busca primero en el scope local antes de buscar en el scope global.

//     // let z = 5;
//     // console.log(z); // 5 // Si existe en el contexto local, JavaScript no se preocupa en buscar en el contexto global.

//     // var e = 5; // Si el var está declarado como local a la función, NO se le hace hoisting fuera (global). Hoisting depende del contexto, y acá el contexto es la función.

//     if (c === 3) {
//         var e = 5; // Por hoisting termina siendo local a la función (CONTEXTO).
//         let f = 6; // Local al if.

//         console.log('a dentro del if vale: ' + a); // 1
//         console.log('b dentro del if vale: ' + b); // 2
//         console.log('c dentro del if vale: ' + c); // El valor que se le pase a prueba.
//         console.log('d dentro del if vale: ' + d); // 4
//         console.log('e dentro del if vale: ' + e); // 5
//         console.log('f dentro del if vale: ' + f); // 6
//     }

//     console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
//     console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
//     console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // El valor que se le pase a prueba.
//     console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
//     console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
//     console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
// }

// prueba(3);

// console.log('a vale: ' + a); // 1
// console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
