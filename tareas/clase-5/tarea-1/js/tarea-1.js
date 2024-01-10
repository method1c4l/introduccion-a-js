// TAREA 1:
// Crear un formulario donde el usuario pueda ingresar su salario anual.
// Cuando el usuario haga click en el botón "Calcular", mostrar el salario mensual en una caja de texto deshabilitada.
// <input id="salario-mensual" type="text" disabled/>

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
    const $salarioAnual = Number(document.querySelector('#salario-anual').value);

    const resultadoSalarioMensual = calcularSalarioMensual($salarioAnual);

    mostrarSalarioMensual(resultadoSalarioMensual);

    return false;
}


function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_ANIO = 12;

    const resultado = salarioAnual / MESES_EN_ANIO;

    return resultado;
}

function mostrarSalarioMensual(resultadoSalarioMensual) {
    const $salarioMensual = document.querySelector('#salario-mensual');

    $salarioMensual.value = resultadoSalarioMensual.toFixed(2);
}
