/* IMPORTANTE */

// 1. Los '<input>' no tienen '.innerText', en vez de eso usan '.value'.
// https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

// 2. Los demás elementos usan '.innerText' o '.textContent' para acceder y modificar al texto que aparece dentro.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

// 3. Para evitar que el formulario se envie y por ende se recargue la página, al event handler “onclick” hay que agregarle 'return false;' al final de la función.
// Ejemplo:
// $botonCalcular.onclick = function()
//     // Código que se ejecuta cuando le hagan click a este elemento...

//     return false;
// }



// TIP: Cada ejercicio hacerlo en un nuevo archivo HTML y un nuevo archivo JS.

// TAREA 1:
// Crear un formulario donde el usuario pueda ingresar su salario anual.
// Cuando el usuario haga click en el botón "Calcular", mostrar el salario mensual en una caja de texto deshabilitada.
// <input id="salario-mensual" type="text" disabled/>


// TAREA 2:
// Creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario.
// También vamos a crear un '<h1>' que diga 'Bienvenido!'.
// Crear un botón de acción que una vez que lo apretás, va a mostrar toda la información junta en un campo de texto,
// y va a cambiar el '<h1>' para decir "Bienvenido, nombreDeUsuario"!


// TAREA 3:
// Por cada clase de r/Argentina Programa existente, vamos a pedir horas, minutos y segundos de cada video.
// Ejemplo: Si un video dura 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con cada dato.
// Al apretar el botón "Calcular tiempo total", debe mostrar en un '<strong>' pre-creado el tiempo total de los videos.


// TAREA 4:
// Crear una lista de '<ol>' y '<li>' que contengan sólo números.
// Convertir esos números a un array y:
// 1. Calcular el promedio y mostrarlo en un '<em>' pre-creado con el texto "El promedio es...".
// 2. Obtener el número más pequeño, y mostrarlo en un '<em>' pre-creado con el texto "El número más pequeño es...".
// 3. Obtener el número más grande, y mostrarlo en un '<em>' pre-creado con el texto "El número más grande es...".
// 4. Obtener el número que más se repite, y mostrarlo en un '<em>' pre-creado con el texto "El número más frecuente es...".
