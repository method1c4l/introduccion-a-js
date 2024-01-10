// TAREA 2:
// Creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario.
// También vamos a crear un '<h1>' que diga 'Bienvenido!'.
// Crear un botón de acción que una vez que lo apretás, va a mostrar toda la información junta en un campo de texto,
// y va a cambiar el '<h1>' para decir "Bienvenido, nombreDeUsuario"!

const $botonIngresar = document.querySelector('#ingresar');

$botonIngresar.onclick = function () {
    const $primerNombre = (document.querySelector('#primer-nombre').value).trim();
    const $segundoNombre = (document.querySelector('#segundo-nombre').value).trim();
    const $apellido = (document.querySelector('#apellido').value).trim();
    const $edad = Number(document.querySelector('#edad').value);

    mostrarDatosUsuario($primerNombre, $segundoNombre, $apellido, $edad);

    saludarUsuario($primerNombre);

    return false;
}

const $botonReiniciar = document.querySelector('#reiniciar');

$botonReiniciar.onclick = function () {
    reiniciarDatosUsuario();

    reiniciarSaludoUsuario();
}


function mostrarDatosUsuario(primerNombre, segundoNombre, apellido, edad) {
    const $outputDatosUsuario = document.querySelector('#datos-usuario');

    const segundoNombreExiste = segundoNombre !== '';

    if (segundoNombreExiste) {
        $outputDatosUsuario.textContent = `${primerNombre} ${segundoNombre} ${apellido}, ${edad} años.`;
    } else {
        $outputDatosUsuario.textContent = `${primerNombre} ${apellido}, ${edad} años.`;
    }
}

function saludarUsuario(primerNombre) {
    const $titulo = document.querySelector('#titulo');

    $titulo.textContent = `¡Bienvenid@, ${primerNombre}!`;
}

function reiniciarDatosUsuario() {
    const $outputDatosUsuario = document.querySelector('#datos-usuario');

    $outputDatosUsuario.textContent = '';
}

function reiniciarSaludoUsuario() {
    const $titulo = document.querySelector('#titulo');

    $titulo.textContent = '¡Bienvenid@!';
}
