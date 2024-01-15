// TAREA 1:
// Empezar preguntando cuánta gente hay en el grupo familiar.
// Crear tantos 'inputs' + 'labels' como gente haya para completar la edad de cada integrante.
// Al hacer click en "Calcular", mostrar en un elemento pre-existente:
// La mayor edad, la menor edad y el promedio de edad del grupo familiar.

// BONUS: Crear un botón para "Empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados.
// Investigar cómo se hace en MDN.

const $botonAceptar = document.querySelector('#aceptar');

$botonAceptar.onclick = function () {
    const $cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

    const mismaCantidadExiste = verificarInputsExistentes($cantidadIntegrantes);

    if (mismaCantidadExiste) {
        return false;
    }

    crearInputsEdad($cantidadIntegrantes);

    crearBotonCalcular();

    return false;
}


const $botonReiniciar = document.querySelector('#reiniciar');

$botonReiniciar.onclick = function () {
    eliminarElementosCreados();

    eliminarResultados();
}



function verificarInputsExistentes(nuevaCantidad) {
    const $inputs = document.querySelectorAll('#inputs-integrantes label');
    const cantidadExistente = $inputs.length;

    if (cantidadExistente === nuevaCantidad) {
        return true;
    } else {
        eliminarElementosCreados();

        return false;
    }
}


function crearInputsEdad(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        const nuevoLabel = document.createElement('label');
        const nuevoInput = document.createElement('input');
        const nuevoTexto = document.createTextNode(`Integrante #${i + 1}`);

        nuevoInput.classList.add('edad-integrante');
        nuevoInput.type = 'number';

        nuevoLabel.appendChild(nuevoTexto);
        nuevoLabel.appendChild(nuevoInput);

        const $inputsContainer = document.querySelector('#inputs-integrantes');

        $inputsContainer.appendChild(nuevoLabel);
    }
}


function crearBotonCalcular() {
    const nuevoBoton = document.createElement('button');
    const nuevoTexto = document.createTextNode('Calcular');

    nuevoBoton.id = 'calcular';
    nuevoBoton.type = 'submit';

    nuevoBoton.appendChild(nuevoTexto);

    nuevoBoton.onclick = function () {
        const $edadesIntegrantes = document.querySelectorAll('.edad-integrante');

        const arrayResultados = realizarCalculos($edadesIntegrantes);

        mostrarResultados(arrayResultados);

        return false;
    }

    const $inputsContainer = document.querySelector('#inputs-integrantes');

    $inputsContainer.appendChild(nuevoBoton);
}


function eliminarElementosCreados() {
    const $inputsContainer = document.querySelector('#inputs-integrantes');

    while ($inputsContainer.hasChildNodes()) {
        $inputsContainer.removeChild($inputsContainer.lastElementChild);
    }
}


function realizarCalculos(edadesIntegrantes) {
    const arrayEdades = convertirArray(edadesIntegrantes);

    const edadMayor = Math.max(...arrayEdades);
    const edadMenor = Math.min(...arrayEdades);
    const edadPromedio = calcularPromedio(arrayEdades);

    const resultados = [edadMayor, edadMenor, edadPromedio];

    return resultados;
}

function convertirArray(edadesIntegrantes) {
    const edades = [];

    for (let i = 0; i < edadesIntegrantes.length; i++) {
        const edad = Number(edadesIntegrantes[i].value);

        if (edad !== 0) {
            edades.push(edad);
        }
    }

    return edades;
}

function calcularPromedio(edades) {
    let totalEdades = 0;

    for (let i = 0; i < edades.length; i++) {
        totalEdades += edades[i];
    }

    const resultado = totalEdades / edades.length;

    return resultado;
}


function mostrarResultados(resultados) {
    document.querySelector('#edad-mayor').textContent = `La edad mayor es: ${resultados[0]} años.`;
    document.querySelector('#edad-menor').textContent = `La edad menor es: ${resultados[1]} años.`;
    document.querySelector('#edad-promedio').textContent = `La edad promedio es: ${resultados[2].toFixed(0)} años.`;
}

function eliminarResultados() {
    const $resultados = document.querySelectorAll('#resultados em');

    for (let i = 0; i < $resultados.length; i++) {
        $resultados[i].textContent = '';
    }
}
