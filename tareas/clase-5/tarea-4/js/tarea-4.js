// TAREA 4:
// Crear una lista de '<ol>' y '<li>' que contengan sólo números.
// Convertir esos números a un array y:
// 1. Calcular el promedio y mostrarlo en un '<em>' pre-creado con el texto "El promedio es...".
// 2. Obtener el número más pequeño, y mostrarlo en un '<em>' pre-creado con el texto "El número más pequeño es...".
// 3. Obtener el número más grande, y mostrarlo en un '<em>' pre-creado con el texto "El número más grande es...".
// 4. Obtener el número que más se repite, y mostrarlo en un '<em>' pre-creado con el texto "El número más frecuente es...".

const $botonAgregar = document.querySelector('#agregar');

$botonAgregar.onclick = function () {
    const $numero = Number(document.querySelector('#input-numero').value);

    agregarNumeroLista($numero);

    manejarVisibilidadBotonCalcular($botonCalcular);

    return false;
}


const $botonRemover = document.querySelector('#remover');

$botonRemover.onclick = function () {
    removerNumeroLista();

    manejarVisibilidadBotonCalcular($botonCalcular);

    return false;
}


const $botonReiniciar = document.querySelector('#reiniciar');

$botonReiniciar.onclick = function () {
    reiniciarListaCompleta();

    manejarVisibilidadBotonCalcular($botonCalcular);

    eliminarResultados();
}


const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
    const $liNumeros = document.querySelectorAll('li.numero');

    const arrayResultados = realizarCalculos($liNumeros);

    mostrarResultados(arrayResultados);

    return false;
}



function agregarNumeroLista(numero) {
    const $liVacios = document.querySelectorAll('li.vacio');
    const hayEspacio = $liVacios.length > 0;

    if (hayEspacio) {
        $liVacios[0].textContent = numero;
        $liVacios[0].className = 'numero';
    }
}

function removerNumeroLista() {
    const $liNumeros = document.querySelectorAll('li.numero');

    const cantidadNumeros = $liNumeros.length;
    const existeNumero = cantidadNumeros > 0;

    if (existeNumero) {
        $liNumeros[cantidadNumeros - 1].textContent = '-';
        $liNumeros[cantidadNumeros - 1].className = 'vacio';
    }
}

function reiniciarListaCompleta() {
    const $liNumeros = document.querySelectorAll('li.numero');

    for (let i = 0; i < $liNumeros.length; i++) {
        $liNumeros[i].textContent = '-';
        $liNumeros[i].className = 'vacio';
    }
}


function manejarVisibilidadBotonCalcular(boton) {
    const $liNumeros = document.querySelectorAll('li.numero');

    const botonInvisible = boton.classList.contains('oculto');
    const hayMinimoDosNumeros = $liNumeros.length >= 2;

    if (botonInvisible && hayMinimoDosNumeros) {
        boton.classList.remove('oculto');
    } else if (!botonInvisible && !hayMinimoDosNumeros) {
        boton.classList.add('oculto');
    }
}


function realizarCalculos(listaNumeros) {
    const arrayNumeros = convertirArray(listaNumeros);

    const resultadoPromedio = calcularPromedio(arrayNumeros);
    const numeroMenor = Math.min(...arrayNumeros);
    const numeroMayor = Math.max(...arrayNumeros);
    const numeroRepetido = extraerNumeroRepetido(arrayNumeros);

    const resultados = [resultadoPromedio, numeroMenor, numeroMayor, numeroRepetido];

    return resultados;
}

function convertirArray(listaNumeros) {
    let numeros = [];

    for (let i = 0; i < listaNumeros.length; i++) {
        const numero = Number(listaNumeros[i].textContent);

        numeros.push(numero);
    }

    return numeros;
}

function calcularPromedio(numeros) {
    let totalNumeros = 0;

    for (let i = 0; i < numeros.length; i++) {
        totalNumeros += numeros[i];
    }

    const resultado = totalNumeros / numeros.length;

    return resultado;
}

function extraerNumeroRepetido(numeros) {
    let numeroRepetido;
    let maxRepeticiones = 0;

    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        const numeroActual = numeros[i];

        for (let j = i; j < numeros.length; j++) {
            if (numeroActual === numeros[j]) {
                contador += 1;
            }
        }

        if (contador >= maxRepeticiones) {
            numeroRepetido = numeroActual;
            maxRepeticiones = contador;
        }

        contador = 0;
    }

    if (maxRepeticiones === 1) {
        return 'No se repite ningún número';
    } else {
        return numeroRepetido;
    }
}


function mostrarResultados(resultados) {
    document.querySelector('#resultado-promedio').textContent = `El resultado promedio de los números es: ${resultados[0].toFixed(2)}`;
    document.querySelector('#numero-menor').textContent = `El número menor es: ${resultados[1]}`;
    document.querySelector('#numero-mayor').textContent = `El número mayor es: ${resultados[2]}`;
    document.querySelector('#numero-repetido').textContent = `El número más repetido es: ${resultados[3]}`;
}

function eliminarResultados() {
    const $resultados = document.querySelectorAll('#resultados em');

    for (let i = 0; i < $resultados.length; i++) {
        $resultados[i].textContent = '';
    }
}
