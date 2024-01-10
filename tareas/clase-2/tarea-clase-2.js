// TAREA 1:
// Tenemos 2 funciones de la tarea anterior: 'sumar' y 'restar'.
//    Vamos a decirle a la máquina qué función tiene que correr, dependiendo del operador artmético (+, -, /, *).
//
//    Si el (IF) operador es '+', vamos a usar la función para sumar.
//    Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos la función 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!

function sumar(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

function restar(numeroUno, numeroDos) {
    return numeroUno - numeroDos;
}


const numeroUno = Number(prompt('Ingrese un número cualquiera'));
const numeroDos = Number(prompt('Ingrese un segundo número'));

function realizarOperacion(operador, numeroUno, numeroDos) {
    let resultado;

    if (operador === '+') {
        resultado = sumar(numeroUno, numeroDos);

        return resultado;
    } else {
        resultado = restar(numeroUno, numeroDos);

        return resultado;
    }
}

const resultadoOperacion = realizarOperacion('+', numeroUno, numeroDos);

console.log(`${numeroUno} + ${numeroDos} = ${resultadoOperacion}`);


// TAREA 2:
// Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.

// const resultadoOperacion = realizarOperacion('-', numeroUno, numeroDos);

// console.log(`${numeroUno} - ${numeroDos} = ${resultadoOperacion}`);



// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings

// Interpolación de Variables: Referenciar a una variable dentro de un string. `string ${variable}`

// En JavaScript la interpolación es una herramienta muy potente, ya que permite ejecutar funciones.
// Por ejemplo: `${saludo.toUpperCase()} ${nombre}`
