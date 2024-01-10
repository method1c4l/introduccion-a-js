// TAREA 1:
// Imprimí cada tercer número del 3 al 22 usando un bucle 'for'.

function tareaUno() {
    for (let i = 3; i < 22; i += 3) {
        console.log(i);
    }
}

// tareaUno();


// TAREA 2:
// Usando un bucle 'while', decile a tu computadora que registre los números del diez a uno.
// TIP: Los contadores pueden ser para arriba o para abajo.

function tareaDos() {
    let numero = 10;

    while (numero >= 1) {
        console.log(numero);

        numero--;
    }
}

// tareaDos();


// TAREA 3:
// Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
//  - Si es un múltiplo de 3, imprime 'Fizz'.
//  - Si es un múltiplo de 5, imprime 'Buzz'.
//  - Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
//  - Para todos los demás, imprime solo el número.

// TIP: Es posible que desees utilizar el operador aritmético modulo '%', que calcula el resto al dividir.
//  10 % 3 = 1 - En 10 tenemos 3 * 3 + 1.
//  16 % 4 = 0 - En 16 tenemos 4 * 4.
//  19 % 4 = 3 - En 19 tenemos 4 * 4 + 3.

function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        const multiploDeTres = i % 3 === 0;
        const multiploDeCinco = i % 5 === 0;

        if (multiploDeTres && multiploDeCinco) {
            console.log('FizzBuzz');
        } else if (multiploDeTres) {
            console.log('Fizz');
        } else if (multiploDeCinco) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz();


// FizzBuzz v2.0

function fizzBuzzV2() {
    for (let i = 1; i <= 50; i++) {
        let texto = '';

        const multiploDeTres = i % 3 === 0;
        const multiploDeCinco = i % 5 === 0;

        if (multiploDeTres) {
            texto = 'Fizz';
        }

        if (multiploDeCinco) {
            texto += 'Buzz';
        }

        console.log(texto || i);
    }
}

// fizzBuzzV2();


// TAREA 4:
// Calcular el promedio de todos los números en un array de números, y ponerlo en una función.
// Ejemplo: calcularPromedio([10,5,4,2,8])

const numeros = [10, 5, 4, 2, 8];

function calcularPromedio(numeros) {
    let totalNumeros = 0;

    for (let i = 0; i < numeros.length; i++) {
        totalNumeros += numeros[i];
    }

    const resultado = totalNumeros / numeros.length;

    return resultado;
}

// const promedioNumeros = calcularPromedio(numeros);

// console.log(`El promedio de los números es: ${promedioNumeros}`);



/* Parámetros Predeterminados */

// En JavaScript, los parámetros de función están predeterminados en 'undefined'. Sin embargo,
// a menudo es útil establecer un valor predeterminado diferente. Aquí es donde los parámetros predeterminados
// pueden ayudar.
// Por ejemplo: multiplicar(a, b = 1), multiplicar(5); // 5 * 1 = 5


/* Operador Condicional (ternario) */

// (condición) ? expr1 (true) : expr2 (false);
// Ejemplo: 'La cuota es de: ' + (usuarioEsMiembro ? '$500' : '$1000');



/* ++variable o variable++ */

// function test() {
//     let x = 0; // 'x' empieza valiendo 0.
//     let y = ++x; // Se le suma 1 a 'x', 'x' ahora vale 1 y se le asigna a 'y', 'y' vale 1.
//     let z = x++; // Se le asigna 'x' a 'z', 'z' vale 1, y se le suma 1 a 'x', 'x' ahora vale 2.

//     console.log(z);
// }

// test();



/* Expresiones de Función (funciones anónimas) */

// En JavaScript cualquier cosa puede ser una variable, y se dice que las funciones son 'first class citizens'.
// Por ejemplo: Variable de tipo función.
// const z = function() {...}, z(); // La función no tiene nombre, pero como está asignada a la variable 'z', puede ser llamada normalmente.


// Las funciones también se pueden pasar como parámetro.

// function sumar(n1, n2) {
//     return n1 + n2;
// }

// function operacion(funcionOperador, n1, n2) {
//     console.log(funcionOperador(n1, n2));
// }

// operacion(sumar, n1, n2);

// IMPORTANTE: 'sumar' es suficiente para hacer referencia a la función 'sumar()'. Si se utiliza 'sumar()' la máquina va
// a primero resolver dicha función y le va a pasar como parámetro su resultado, lo que termina dando error.
