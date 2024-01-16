// TAREA 2:
// Crear una interfaz que permita agregar ó quitar (botones 'Agregar' y 'Remover') 'inputs' + 'labels'
// para completar el salario anual de cada integrante de la familia que trabaje.
// Al hacer click en "Calcular", mostrar en un elemento pre-existente:
// El mayor salario anual, el menor salario anual, el salario anual promedio y el salario mensual promedio.

// BONUS: Si hay inputs vacíos, ignorarlos en el cálculo (NO contarlos como 0).

const $botonAgregar = document.querySelector('#agregar');

$botonAgregar.onclick = function () {
    crearInputSalarioAnual();

    manejarVisibilidadBotonCalcular($botonCalcular);

    return false;
}


const $botonRemover = document.querySelector('#remover');

$botonRemover.onclick = function () {
    eliminarInputSalarioAnual();

    manejarVisibilidadBotonCalcular($botonCalcular);

    return false;
}


const $botonReiniciar = document.querySelector('#reiniciar');

$botonReiniciar.onclick = function () {
    eliminarInputsExistentes();

    manejarVisibilidadBotonCalcular($botonCalcular);

    eliminarResultados();
}


const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
    const $salariosIntegrantes = document.querySelectorAll('.salario-individuo');

    const arrayResultados = realizarCalculos($salariosIntegrantes);

    mostrarResultados(arrayResultados);

    return false;
}



function crearInputSalarioAnual() {
    const nuevoLabel = document.createElement('label');
    const nuevoInput = document.createElement('input');
    const nuevoTexto = document.createTextNode(`Salario anual individuo #${contarNumeroIndividuo()}:`);

    nuevoInput.classList.add('salario-individuo');
    nuevoInput.type = 'number';

    nuevoLabel.appendChild(nuevoTexto);
    nuevoLabel.appendChild(nuevoInput);

    const $inputsContainer = document.querySelector('#inputs-salarios');

    $inputsContainer.appendChild(nuevoLabel);
}

function eliminarInputSalarioAnual() {
    const $inputsContainer = document.querySelector('#inputs-salarios');

    if ($inputsContainer.hasChildNodes()) {
        $inputsContainer.removeChild($inputsContainer.lastElementChild);
    }
}

function eliminarInputsExistentes() {
    const $inputsContainer = document.querySelector('#inputs-salarios');

    while ($inputsContainer.hasChildNodes()) {
        $inputsContainer.removeChild($inputsContainer.lastElementChild);
    }
}


function contarNumeroIndividuo() {
    const $inputs = document.querySelectorAll('.salario-individuo');

    const numeroActual = $inputs.length;
    const numeroSiguiente = numeroActual + 1;

    return numeroSiguiente;
}


function manejarVisibilidadBotonCalcular(boton) {
    const $inputs = document.querySelectorAll('.salario-individuo');

    const botonInvisible = boton.classList.contains('oculto');
    const hayMinimoUnInput = $inputs.length >= 1;

    if (botonInvisible && hayMinimoUnInput) {
        boton.classList.remove('oculto');
    } else if (!botonInvisible && !hayMinimoUnInput) {
        boton.classList.add('oculto');
    }
}


function realizarCalculos(salariosIntegrantes) {
    const arraySalarios = convertirArray(salariosIntegrantes);

    const salarioAnualMayor = Math.max(...arraySalarios);
    const salarioAnualMenor = Math.min(...arraySalarios);
    const salarioAnualPromedio = calcularPromedio(arraySalarios);

    const salariosMensuales = calcularSalariosMensuales(arraySalarios);
    const salarioMensualPromedio = calcularPromedio(salariosMensuales);

    const resultados = [salarioAnualMayor, salarioAnualMenor, salarioAnualPromedio, salarioMensualPromedio];

    return resultados;
}

function convertirArray(salariosIntegrantes) {
    let salarios = [];

    for (let i = 0; i < salariosIntegrantes.length; i++) {
        const salario = Number(salariosIntegrantes[i].value);

        if (salario !== 0) {
            salarios.push(salario);
        }
    }

    return salarios;
}

function calcularPromedio(salarios) {
    totalSalarios = 0;

    for (let i = 0; i < salarios.length; i++) {
        totalSalarios += salarios[i];
    }

    const resultado = totalSalarios / salarios.length;

    return resultado;
}

function calcularSalariosMensuales(salariosAnuales) {
    let salariosMensuales = [];

    const MESES_EN_ANIO = 12;

    for (let i = 0; i < salariosAnuales.length; i++) {
        const salarioMensual = salariosAnuales[i] / MESES_EN_ANIO;

        salariosMensuales.push(salarioMensual);
    }

    return salariosMensuales;
}


function mostrarResultados(resultados) {
    document.querySelector('#salario-anual-mayor').textContent = `El salario anual más alto es: ${resultados[0]}`;
    document.querySelector('#salario-anual-menor').textContent = `El salario anual más bajo es: ${resultados[1]}`;
    document.querySelector('#salario-anual-promedio').textContent = `El salario anual promedio es: ${resultados[2].toFixed(2)}`;
    document.querySelector('#salario-mensual-promedio').textContent = `El salario mensual promedio es: ${resultados[3].toFixed(2)}`;
}

function eliminarResultados() {
    const $resultados = document.querySelectorAll('#resultados em');

    for (let i = 0; i < $resultados.length; i++) {
        $resultados[i].textContent = '';
    }
}
