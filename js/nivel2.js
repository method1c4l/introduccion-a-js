// Nivel 2


/*
    Introducción
    ============

    ¡Bienvenido al nivel 2! Es tiempo de interactuar con HTML.

    Los archivos Hyper Text Markup Language (HTML) son la columna vertebral de Internet.
    Cada sitio web que visita se carga primero como un archivo HTML.

    No hablaremos demasiado sobre HTML hoy. Lo que necesitas saber es que los archivos HTML
    funcionan como una especie de esqueleto para tu página. Nuestro archivo index.html
    combina todos los archivos de este proyecto para que puedas abrirlos en tu navegador web.

    Este proyecto tiene un archivo llamado index.html. Al final de index.html usted
    verá la siguiente etiqueta:

    <script src="js/nivel1.js"></script>

    Así es como has estado ejecutando el archivo nivel1.js en un navegador.
    Ahora cambia nivel1.js para apuntar a este archivo: nivel2.js.

    ¡Ahora estás listo para comenzar!
*/



/*
    Arrays
    ======

    Un array o vector es una lista ordenada de valores. Podes guardar cualquier cantidad de valores dentro.
    Y también cualquier tipo de valores: números, strings, objetos, incluso otros Arrays (matriz).

    Por ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let numeros = [1, 2, 8, 19];
*/

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas comidas que te gusten.

    const comidasFavoritas = ['asado', 'tortilla', 'pizza', 'helado'];



/*
    Tamaño del Array
    ================

    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad: '.length'
    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// Imprimir el resultado utilizando console.log.

    // console.log(comidasFavoritas.length);



/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando 'notación de corchetes'.
    Gracias a un señor llamado Edsger Dijkstra*, los índices del array se comienzan a contar desde 0.
    El uso se ve así:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];
    let segundoItem = cosasAleatorias[1]; y así sucesivamente.

    *https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

    // const tercerComidaFavorita = comidasFavoritas[2];

    // console.log(tercerComidaFavorita);



/*
    Cambio de Valores en Arrays
    ===========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Por ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // Reemplacemos 'perro' con 'pez':
    animales[1] = 'pez';

    // Ahora nuestro array de animales pasa a ser: ['gato', 'pez', 'caballo'];
*/

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor con otra comida.

    // console.log(comidasFavoritas);

    // comidasFavoritas[0] = 'milanesa';


// TAREA: Imprimir el array con console.log para verificar los cambios.

    // console.log(comidasFavoritas);


// TIP: ¡No te olvides que las posiciones de índice comienzan desde 0!



/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método '.push()'.
    Push agregará un nuevo valor al final del array. Existen otros métodos para agregar/remover valores de un array.
    Pero por ahora usaremos '.push()'.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    animales.push('conejo');

    // Nuestro array de animales pasa a ser: ['gato', 'perro', 'caballo', 'conejo'];
*/

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.

    // console.log(comidasFavoritas);

    // comidasFavoritas.push('alfajor');


// TAREA: Imprimir el array con console.log para verificar.

    // console.log(comidasFavoritas);



/*
    Arrays Constantes
    =================

    Un array es lo que se conoce como un "tipo de referencia".
    Lo que esto significa es que incluso si un array se declara (crea) usando 'const',
    los valores *dentro* del array todavía se pueden cambiar; el array en sí no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // Esto es válido, y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');

    // Esto NO es válido, y devolverá un error igual al que se genera al intentar cambiar cualquier constante:
    animales = ['ratón', 'elefante'];
*/

// TAREA: Crear un array como una constante e intentá modificar los valores que contiene.
// Observa lo que sucede si agregas algo con '.push()', cambias algo con notación de corchetes 'array[1]',
// y asignas un array completamente nuevo a la constante.

    // const a = [1, 2, 3];

    // console.log(a);

    // a.push(4);

    // a[0] = 5;

    // console.log(a);

    // a = [4, 5, 6];



/*
    Bucles
    ======

    ¡La gente siempre ha sido perezosa, pero a veces progresa!
    A nosotros no nos gusta repetir las mismas aburridas acciones una y otra vez,
    así que buscamos formas de evitarlo.

    La programación es igual. Por ejemplo, si quiero imprimir 10 veces 'JavaScript  es increible!',
    ¿cuáles son mis opciones?. Por supuesto, puedo escribir diez líneas de código repitiendo la misma instrucción,
    pero también puedo decirle a la computadora que lo repita, en lugar de que yo lo escriba 10 veces.

    Para esto usamos bucles.

    Cada iteración debe tener tres cosas principales:
    - Un punto de partida.
    - Una condición (punto final).
    - Un contador (un paso).

    Si te olvidas uno de estos, ¡podes entrar en un bucle infinito!

    Veamos diferentes estructuras de bucle.
*/


/*
    Bucles While (mientras)
    ============

    El bucle 'while' hará una acción para siempre hasta que se cumpla alguna condición.

    Ejemplo:

    // Punto de partida:
    let numero = 0;

    while (numero < 10) {
      // 'menos de 10' es una condición (punto final).

      console.log('JavaScript es increíble!');

      numero = numero + 1;
      // + 1 es un contador (tamaño del paso).
    }

    // numero = numero + 1;
    // numero += 1;
    // numero++;
*/

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números del diez a uno.
// TIP: Los contadores pueden ser para arriba o para abajo.

    // let numero = 10; // Variable contadora (counter) o acumuladora.

    // while (numero >= 1) {
    //     console.log(numero);

    //     numero -= 1;
    // }


/*
    Bucles For (para)
    ==========

    Los bucles 'for' son muy similares al bucle 'while'. En un bucle for se declara un contador en la declaración.

    Ejemplo:

    // (Punto de partida (se ejecuta una sola vez); Condicion (se revisa en cada iteración); Paso (se aplica después de cada iteración)).
    // 'i' es la variable de index (indice).

    for (let i = 0; i <= 5; i = i + 1) {
        console.log('Hola!');
    }
*/

// TAREA: Imprimí cada tercer número del 3 al 22 usando un bucle 'for'.

    // for (let i = 3; i < 22; i += 3) {
    //     console.log(i);
    // }


// Ejemplo:

    const notasParciales = [10, 4, 5, 6];

    let totalNotasParciales = 0;

    for (let i = 0; i < notasParciales.length; i++) {
        totalNotasParciales += notasParciales[i];
    }

    const promedioParciales = totalNotasParciales / notasParciales.length;

    console.log(`El promedio de los parciales es: ${promedioParciales}`);



/*
    Iterando a través de Arrays
    ===========================

    Ahora que conocemos los bucles, vamos a usar cada valor de mi lista de animales
    y expresar mi amor por cada uno. ¿Cómo lo voy a hacer?

    Podemos usar un bucle 'for' para iterar a través de nuestro array y obtener cada uno de los valores.

    // Nota: 'i++' es otra forma de expresar 'i = i + 1'.

    Por ejemplo:

    const animales = ['gatos', 'perros', 'caballos'];

    for (let i = 0; i < animales.length; i++) {
        console.log('Me gustan los ' + animales[i]); // animales[i] se lee: "animales en i".
    }
*/

// TAREA: Probalo con tu array de comidasFavoritas!

    // for (let i = 0; i < comidasFavoritas.length; i++) {
    //     console.log(`Mi comida favorita es ${comidasFavoritas[i]}`);
    // }



/*
    Bucles y Lógica
    ===============

    Traigamos bucles junto con las declaraciones 'if' / 'else' que aprendimos en el
    nivel 1, y hagamos algo interesante.

    Contemos de 10 a 0, e imprimamos todos los números.
    Pero cuando lleguemos al medio (5) imprimamos 'Estamos en el medio!'.

    Ejemplo:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('Estamos en el medio!');
        } else {
            console.log(i);
        }
    }
*/



//////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 2 de JavaScript Básico!            //
// Levántate, estira las piernas y celebra tu logro!                        //
// El siguiente paso será seguir las instrucciones en el archivo nivel3.js. //
//////////////////////////////////////////////////////////////////////////////
