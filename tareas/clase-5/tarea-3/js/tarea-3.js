// TAREA 3:
// Por cada clase de r/Argentina Programa existente, vamos a pedir horas, minutos y segundos de cada video.
// Ejemplo: Si un video dura 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// Al apretar el botón "Calcular tiempo total", debe mostrar en un '<strong>' pre-creado el tiempo total de los videos.

const $botonAceptar = document.querySelector('#aceptar');

$botonAceptar.onclick = function () {
    const $cantidadVideos = Number(document.querySelector('#cantidad-videos').value);

    const mismaCantidadExiste = verificarExistenciaInputs($cantidadVideos);

    if (mismaCantidadExiste) {
        return false;
    }

    crearConjuntoInputs($cantidadVideos);

    crearBotonCalcular();

    return false;
}

const $botonReiniciar = document.querySelector('#reiniciar');

$botonReiniciar.onclick = function () {
    limpiarInputCantidad();

    eliminarInputsExistentes();

    eliminarResultado();

    return false;
}


function verificarExistenciaInputs(nuevaCantidad) {
    const $conjuntoInputs = document.querySelectorAll('fieldset');
    const cantidadExistente = $conjuntoInputs.length;

    if (cantidadExistente === nuevaCantidad) {
        return true;
    } else {
        eliminarInputsExistentes();

        return false;
    }
}

function eliminarInputsExistentes() {
    const $inputContainer = document.querySelector('#inputs-duracion');

    while ($inputContainer.hasChildNodes()) {
        $inputContainer.removeChild($inputContainer.lastElementChild);
    }
}


function crearConjuntoInputs(cantidadVideos) {
    for (let i = 0; i < cantidadVideos; i++) {
        const nuevoFieldset = document.createElement('fieldset');
        const nuevoLegend = document.createElement('legend');
        const nuevoTexto = document.createTextNode(`Video #${i + 1}`);

        nuevoFieldset.appendChild(nuevoLegend);
        nuevoLegend.appendChild(nuevoTexto);

        crearInputs(nuevoFieldset);


        const $inputContainer = document.querySelector('#inputs-duracion');

        $inputContainer.appendChild(nuevoFieldset);
    }
}

function crearInputs(container) {
    const nombresInputs = ['Horas', 'Minutos', 'Segundos'];

    for (let i = 0; i < 3; i++) {
        const nuevoInput = document.createElement('input');

        nuevoInput.classList.add(`${nombresInputs[i].toLowerCase()}`);
        nuevoInput.type = 'number';
        nuevoInput.placeholder = nombresInputs[i];

        container.appendChild(nuevoInput);
    }
}


function crearBotonCalcular() {
    const nuevoBoton = document.createElement('button');
    const nuevoTexto = document.createTextNode('Calcular duración total');

    nuevoBoton.id = 'calcular';
    nuevoBoton.type = 'submit';

    nuevoBoton.appendChild(nuevoTexto);

    nuevoBoton.onclick = function () {
        const duracionTotal = calcularDuracionTotal();

        mostrarResultado(duracionTotal);

        return false;
    }


    const $inputContainer = document.querySelector('#inputs-duracion');

    $inputContainer.appendChild(nuevoBoton);
}

function calcularDuracionTotal() {
    const $inputHoras = document.querySelectorAll('.horas');
    const $inputMinutos = document.querySelectorAll('.minutos');
    const $inputSegundos = document.querySelectorAll('.segundos');

    let totalHoras = sumar($inputHoras);
    let totalMinutos = sumar($inputMinutos);
    let totalSegundos = sumar($inputSegundos);


    while (totalSegundos > 60) {
        totalMinutos += 1;

        totalSegundos -= 60;
    }

    while (totalMinutos > 60) {
        totalHoras += 1;

        totalMinutos -= 60;
    }

    const resultado = [totalHoras, totalMinutos, totalSegundos];

    return resultado;
}

function sumar(inputDuracion) {
    let duracionTotal = 0;

    for (let i = 0; i < inputDuracion.length; i++) {
        const duracion = inputDuracion[i].value;

        if (duracion !== '') {
            duracionTotal += Number(duracion);
        }
    }

    return duracionTotal;
}


function mostrarResultado(duracionTotal) {
    const $outputDuracion = document.querySelector('#tiempo-total');
    const mensaje = `La duración total de los videos es: ${duracionTotal[0]} horas, ${duracionTotal[1]} minutos, ${duracionTotal[2]} segundos`;

    $outputDuracion.textContent = mensaje;
}

function eliminarResultado() {
    const $outputDuracion = document.querySelector('#tiempo-total');

    $outputDuracion.textContent = '';
}

function limpiarInputCantidad() {
    const $inputCantidadVideos = document.querySelector('#cantidad-videos');

    $inputCantidadVideos.value = '';
}
