// Nivel 3


/*
    Introducción
    ============

    Bieeeeen, has llegado lejos en tan poco tiempo!

    Pero todavía tenemos más cosas para vos. Antes de comenzar, abrí index.html, y
    reemplazá el script de nivel2.js al que vamos a utilizar ahora: nivel3.js

    TIP: Si querés utilizar multiples archivos '.js', simplemente agregá más etiquetas '<script>'.
*/



/*
    Hablemos un poco más de HTML, CSS y de como podemos interactuar con ellos en JavaScript.


    Hypertext Markup Language (HTML)
    -------------------------

    'Hypertext' quiere decir que no es texto plano, si no que el navegador interpreta cada uno de los elementos en el código
    y los muestra de manera distinta.


    Como te habrás dado cuenta, HTML está dividido en elementos que se ven algo así:

    <header>...</header>
    <p>...</p>
    <img/>...

    A estos elementos los llamamos "tags"/elementos/nodos. Cada elemento de la página tiene un tag que abre y otro que cierra.
    NOTA: Algunos tags, como <img/>, no necesitan tener un tag que los cierre (self closing tags).

    La etiqueta que engloba a todas las demás en un archivo HTML es '<html>'.

    Dentro de la etiqueta '<html>' encontrarás un tag '<head>' y un tag '<body>'.

    En '<head>' metemos los metadatos*, el título de la página y los links a los archivos CSS.
    La etiqueta '<body>' contiene nuestro contenido de la página.

    *Metainformación: Información acerca de los datos.


    IMPORTANTE: La velocidad real de una página es igual de importante que la velocidad percibida por el usuario.
    Por lo tanto el tag '<script>' siempre va al final del tag '<body>', ya que el mientras el navegador carga el script
    detiene por completo la carga de los demás elementos, lo que podría dar la impresión de lentitud.
    Otra razón importante es la posibilidad de modificar el contenido de la página mediante JavaScript (DOM).
    Si no se carga el DOM antes de sus modificaciones, puede llegar a parecer que JavaScript no está funcionando, e incluso puede llegar a provocar errores.

    // 1ro: Se carga CSS, 2do: Se carga el contenido de la página, 3ro: Se carga JavaScript
    // De esta forma el usuario ya visualiza la página con todos los estilos a medida que va cargando, y puede empezar a interactual con ella mientras se carga el script.


    Lista completa de las etiquetas HTML: http://htmldog.com/references/html/tags/


    En HTML, los tags pueden contener atributos:

    <div class="opciones">...</div>

    Esta etiqueta div contiene un atributo llamado "class", el cual tiene como valor "opciones".


    Cascading Style Sheets (CSS)
    ----------------------

    CSS describe como se ven los elementos HTML.

    Los archivos CSS consisten en "bloques de declaración".
    Cada bloque de declaración está compuesto de un "selector" y de un conjunto de reglas de estilo visuales.
    Una declaración se ve así:

    [selector] {
        nombre-de-estilo: valor;
        nombre-de-estilo: valor;
        nombre-de-estilo: valor;
    }

    Los selectores especifican sobre que elementos son aplicados los estilos visuales.

    Los selectores más básicos se refieren a los elementos mediante su nombre de etiqueta, y se ven algo así:

    body {
        background-color: white;
    }

    Los selectores pueden también referirse a los elementos mediante su atributo de "clase", algo como esto:

    .settings {
        margin: 0;
    }

    ... o por su ID, algo así:

    #logo {
        text-align: center;
    }

    La lista de las propiedades de CSS es muy grande, podés leer más acá: https://www.w3.org/TR/CSS21/propidx.html


    No te preocupés, no hace falta recordar todo esto ahora mismo!
*/



// Uff, muchas cosas nuevas! Volvamos a JavaScript y veamos como podemos interactuar con HTML.



/*
    Elementos de Acceso
    ===================

    Document Object Model (DOM)
    ---------------------

    El DOM es la representación en JavaScript del elemento HTML que está siendo utilizado.
    Es un objeto que conoce todos los elementos que están cargados en la página web en la cual fue incluido.

    El DOM está disponible bajo una variable global especial llamada "document".
    Podemos obtener nodos específicos (elementos de página) con el metodo DOM: '.querySelector'.

    Obtengamos nuestro link de Twitter desde la página.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');

    // Podemos guardar elementos de la página en variables, al igual que como cualquier otro valor!

    Fijate que un elemento de página es un objeto, el cual es un "tipo de referencia", así como los arrays (mirá el nivel 2).

    Eso quiere decir que se pueden cambiar los atributos y propiedades del elemento,
    pero no la variable en sí misma. Vas a ver esto en acción ahora mismo.
*/

// TAREA: Ahora te toca a vos! Obtené la etiqueta '<h1>' de la página y guardala en una variable llamada nuestroTitulo.
// Utilizá console.log para ver lo que obtuviste!

    // const nuestroTitulo = document.querySelector('h1');

    // console.log(nuestroTitulo);



/*
    Obteniendo Elementos Similares
    ==============================

    También podemos obtener todos los elementos con la misma etiqueta.
    En nuestro pie de página tenemos una lista desordenada (<ul>), con tres elementos de lista (<li>) adentro.

    Obtengamoslos todos con un array de los elementos de la página.
    Cuando querramos obtener multiples elementos, podemos utilizar el método '.querySelectorAll',
    el cual nos dará una lista con las coincidencias.

    Ejemplo:

    const mediaLinks = document.querySelectorAll('li'); // Esto nos dará todos los '<li>' de la página.
*/

// TAREA: Obtené todos los elementos '<li>' de la página y guardalos en una variable llamada mediaLinks.

    // const mediaLinks = document.querySelectorAll('li');

    // console.log(mediaLinks);


// TAREA: Ahora utilizá console.log para ver la cantidad de elementos '<li>' que hay con 'mediaLinks.length'.

    // console.log(mediaLinks.length);


// TAREA: ¿Te acordás de los bucles del nivel 2? Usando lo que sabés de ellos,
// realizá iteraciones sobre cada item de la variable mediaLinks y mostralos en pantalla con console.log.

    // for (let i = 0; i < mediaLinks.length; i++) {
    //     console.log(mediaLinks[i]);
    // }



/*
    Propiedades de los Elementos
    ============================

    Ok, hasta acá todo bien. Peeeroo, ¿que pasa si queremos obtener SOLO el texto de nuestra etiqueta '<h1>'?
    Los elementos de página tienen una propiedad para esto: '.textContent'.

    Por ejemplo:

    nuestroTwitter.textContent;

    // Obtendremos el texto: 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'.
*/

// TAREA: Obtené el contenido de nuestro elemento '<h1>' y utilizá console.log para mostrarlo.

    const titulo = document.querySelector('h1');

    console.log(titulo.textContent);



/*
    Editar el Contenido de la Página
    ================================

    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad que vimos recién, '.textContent'.

    Por ejemplo:

    nuestroTwitter.textContent = '@ButenkoMe';
    console.log(nuestroTwitter.textContent);

    // Adiviná que es lo que vamos a ver en la página y en la consola!
*/

// TAREA: Hagamos un nuevo título! Cambiá el contenido de nuestro '<h1>' y ponele lo que quieras.

    titulo.textContent = 'Hola Mundo!';



/*
    Editando Atributos
    ==================

    También podemos cambiar y establecer atributos en nuestros elementos.

    Por ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.id = "sorpresa";
*/

// TAREA: Actualizá el valor del atributo 'src' de nuestra etiqueta '<img>' a 'img/kittens.jpeg'.

    const imagen = document.querySelector('img');

    imagen.src = 'img/kittens.jpeg';



/*
    Editando Estilos
    ================

    Cambiemos algunos estilos. Los elementos de página tienen una propiedad '.style'.
    Podemos asignarle estilos a esta propiedad utilizando los mismos nombres que en los archivos CSS.

    IMPORTANTE: Si una propiedad tiene '-' en su nombre, como 'font-size', entonces
    el guión será eliminado y las siguiente palabra comenzara con una letra mayúscula,
    y pasará a ser 'fontSize'.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.style.backgroundColor = 'white';
*/

// TAREA: Obtené cualquier elemento de la página y cambiale algunos estilos.

    const subtitulo = document.querySelector('h2');

    subtitulo.style.backgroundColor = 'black';
    subtitulo.style.color = 'white';
    subtitulo.style.fontStyle = 'italic';



/*
    Creando Nuevos Nodos (elementos)
    ====================

    El objeto "document" también nos da maneras de crear nodos desde cero.

    document.createElement('div'); // Crea un nuevo elemento llamado '<div>'.
    document.createTextNode('foobar'); // Crea un nuevo texto que contiene 'foobar'.
    nodoExistente.appendChild(nuevoNodo); // Agrega un nuevoNodo al final de un nodoExistente.

    Ejemplo:

    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode('Siiii!');
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
*/

// TAREA: Todavía seguís teniendo a los gatitos en tu pantalla? A mí me gusta el logo y los gatitos.
// Creá una nuevo nodo con la imagen de nuestro logo, y ponela en nuestra cabecera.
// También les podés dar estilos al nuevo nodo que creaste.

    const header = document.querySelector('header');

    const nuevaImagen = document.createElement('img');
    nuevaImagen.src = 'img/woman_bw.jpg';
    nuevaImagen.style.border = '3px solid black';

    header.appendChild(nuevaImagen);



/* EventListeners: 'onclick' */

const $botonIngreso = document.querySelector('#ingresar');

$botonIngreso.onclick = function () {
    const nombreUsuario = document.querySelector('#nombre-usuario').value;
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);

    const edadMinima = 18
    let textoResultado;

    if (edadUsuario >= edadMinima) {
        textoResultado = `Bienvenid@, ${nombreUsuario}!`;
    } else {
        textoResultado = 'Los menores de edad no pueden entrar.'
    }

    const resultado = document.querySelector('#resultado');
    resultado.style.fontSize = '18px';
    resultado.style.fontWeight = 'bold';
    resultado.style.color = '#7986e5';
    resultado.textContent = textoResultado;

    return false;
}



////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 3 de JavaScript Básico!          //
// Levántate, estira las piernas y celebra tu logro.                      //
// ¡Creo que esto amerita un festejo!                                     //
////////////////////////////////////////////////////////////////////////////
