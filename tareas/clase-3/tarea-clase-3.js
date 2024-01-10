// TAREA 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que el de ustedes, imprimir "Hola, tocayo! Yo también me llamo ..." y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido, etc.
// Si el nombe del usuario es el mismo que el que nombre que eligieron, imprimir "Hola " y el nombre, "Te llamás igual que mi ...".
// Si no, simplemente imprimir "Hola " + nombre!

/*
preguntarNombreUsuario();

function preguntarNombreUsuario() {
    const nombreUsuario = (prompt('Ingrese su nombre') || '').toLowerCase().trim();

    saludarUsuario(nombreUsuario);
}

function saludarUsuario(nombreUsuario) {
    const miNombre = 'pablo';
    const nombreAmigo = 'lucio';

    if (nombreUsuario === miNombre) {
        console.log(`Hola, tocayo! Yo también me llamo ${miNombre}`);
    } else if (nombreUsuario === nombreAmigo) {
        console.log(`Hola ${nombreUsuario}, te llamás igual que un amigo!`);
    } else if (nombreUsuario.length === 0) {
        console.log('No ingresaste ningún nombre.');

        preguntarNombreUsuario();
    } else {
        console.log(`Hola ${nombreUsuario}!`);
    }
}
*/


// TAREA 2:
// Preguntar la edad del usuario.
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
preguntarEdadUsuario();

function preguntarEdadUsuario() {
    const edadUsuario = Number(prompt('Ingrese su edad'));

    compararEdad(edadUsuario);
}

function compararEdad(edadUsuario) {
    const miEdad = 27;

    if (edadUsuario <= 0) {
        console.log('Ingrese una edad válida.');

        preguntarEdadUsuario();
    } else if (edadUsuario > miEdad) {
        console.log('Tenés mas años que yo');
    } else if (edadUsuario < miEdad) {
        console.log('Tenés menos años que yo');
    } else if (edadUsuario === miEdad) {
        console.log('Tenemos la misma edad!');
    } else {
        console.log('No entiendo su respuesta.');

        preguntarEdadUsuario();
    }
}
*/


// TAREA 3:
// Preguntarle al usuario si tiene documento, que conteste con "si" o "no".
// Si dice que si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, decirle que no entendimos la respuesta.
// TIP: SI, NO, Si, No, si, no.

preguntarDocumentoUsuario();

function preguntarDocumentoUsuario() {
    const respuestaDocumentoUsuario = (prompt('Tiene documento? Responda SI/NO') || '').toLowerCase().trim();

    verificarPosesion(respuestaDocumentoUsuario);
}

function verificarPosesion(respuestaDocumentoUsuario) {
    const afirmativa = 'si';
    const negativa = 'no';

    if (respuestaDocumentoUsuario === afirmativa) {
        preguntarEdad();
    } else if (respuestaDocumentoUsuario === negativa) {
        alert('Sin documento no se puede entrar al Bar.');
    } else {
        alert('No entiendo su respuesta.');

        preguntarDocumentoUsuario();
    }
}


function preguntarEdad() {
    const edadUsuario = Number(prompt('Cuantos años tenés?'));

    verificarMayoriaEdad(edadUsuario);
}

function verificarMayoriaEdad(edadUsuario) {
    const mayoriaEdad = 18;

    if (edadUsuario <= 0) {
        alert('Ingrese una edad válida.');

        preguntarEdad();
    } else if (edadUsuario >= mayoriaEdad) {
        alert('Bienvenido al Bar!');
    } else if (edadUsuario < mayoriaEdad) {
        alert('Los menores de edad no pueden entrar al Bar.');
    } else {
        alert('No entiendo su respuesta.');

        preguntarEdad();
    }
}



// null significa que está vacio, que no tiene valor. let x = null;
// undefined significa que está sin definir, solo está decladara. let x;


// Todo en JavaScript es un objeto (funciones, variables, etc.), y cada variable de distinto tipo
// (Boolean, Number, String, etc.) también son clasificados como objetos. Estos objetos tienen propiedades o métodos.
// Por ejemplo: string.toLowerCase().trim().length


/* truthy o falsy */

// false == 0, true // false === 0, false
// true == 1, true // true === 1 , false


/* Short-circuit Evaluation */

// Short circuit evaluation avoids unnecessary work and leads to efficient processing.
// If the result of an expression (&&, ||) is clear even before the complete evaluation of the expression,
// it short circuits and the result will be returned.

/* Lazy Evaluation */

// Lazy evaluation means to delay the evaluation of an expression until it's needed.
// It doesn't cut-off useless computation, but delays the whole computation until its result is requiered.
// Sometimes referred to as call-by-need.

// The difference between Short circuit and Lazy evaluation is that in the case of Lazy evaluation,
// an expression is evaluated only when it is needed, while in case of Short-circuit,
// the expression evaluation stops right after the machine knows the result.
