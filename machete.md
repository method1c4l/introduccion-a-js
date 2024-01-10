# Machete de JavaScript


## JavaScript (o JS)
Es un lenguaje de programación popular que se suele usar para crear efectos interactivos dentro de los navegadores web.

## Variable
Es un espacio para el almacenamiento de valores. Puede almacenar cualquier tipo de informacion (tipos de datos): números, palabras, conjuntos de datos, etc.

### 'undefined' variable o Variable no Definida
Es una variable que no tiene valor.

### 'null' variable o Variable Vacía
Es una variable la cual se determinó que está vacía.

### 'declare' o Declarar una Variable
Se crea como en el siguiente ejemplo:
```
let nombreVariable = valor;
```

### 'initialize' o Inicializar una Variable
Asignar o darle un valor a una variable.


## Tipos de Variables:

### 'string' o Cadena de Caracteres
Se refiere a un conjunto de caracteres, palabra(s) o frases. Para inicializar una variable con un string o cadena de caracteres, hay que poner el mismo entre comillas dobles, o simples.

### 'boolean' o Dato Lógico
Un boolean o tipo de dato lógico representa un valor lógico, es decir, True (verdadero) or False (falso).

### 'array' o 'vector'
Es una lista ordenada de valores, puede guardar diferentes tipos de datos.

### 'operator' u Operador
Son operadores matematicos. Ejemplo: +, -, *, /, >, <, =, etc.

## 'comments' o Comentarios
Los comentarios son notas que se dejan para uno mismo o para otra persona, es una nota que la computadora no va a leer. Se puede escribir un comentario en una linea nueva o en la misma linea que una linea de codigo de la siguiente forma:
```
let nombreVariable; // Soy un comentario.
```

Los comentarios que ocupan una sola linea comienzan con `//`, todo el espacio posterior al comentario en la misma linea va a estar afectado.

Los comentarios que ocupan varias lineas se escriben entre `/* .. */`, y pueden terminar en cualquier lugar dentro del código.

## 'function' o Función
Es un bloque o fragmento de codigo reusable y separable (existe como una unidad funcional). Puede recibir un input o valor de entrada, realizar alguna operacion sobre ella, o manipularla, y devolver un output o valor de salida.

### 'declare' o Declarar una Función
Crear una función.

### 'argument' o Argumento y 'parameter' o Parámetro.
En un valor de entrada que las fuciones pueden aceptar.

## 'if/else' statement o Sentencia Condicional
`if` se usa para decidir si se ejecutan ciertas lineas de codigo, `else` da una lista de instrucciones alternativas.

Por ejemplo:
```
if (x >= 5) {
    console.log("X es mayor a 5");
}
else {
    console.log("X es menor o igual a 5");
}

```

## 'iterating/ioops' o Iteraciones/Estructuras de Control - Bucles:

### 'while loop' o Bucle While
Repite el codigo hasta que se cumpla cierta condicion.

### 'for loop' o Bucle For
Es similar al 'while loop', pero tiene un numero especificado de repeticiones. Se declara un contador en la sentencia de la siguiente forma:
```
for (let i = 0; i < 5; i++) {
    // Hacer algo 5 veces.
}
```

### 'infinite loop' o Bucle Infinito
Esto es un error y causa un bucle indefinido.

Para evitar este error todo loop o bucle debe tener alguna condicion que le permita parar o salir de dicho bucle, y algo que permita que la condicion pueda cumplirse.

## 'object' u Objeto
Se crea un tipo de objeto cuando un usuario interactua con una pagina web. Por ejemplo, JavaScript crea un evento cuando un usuario toca un boton.
 
## CSS
Significa 'Cascading Style Sheets' u Hoja de Estilos en Cascada. CSS permite describir como deben mostrarse los elementos HTML en pantalla. Seria la presentacion de dichos elementos.
 
## HTML
Significa 'Hyper Text Markup Language' o Lenguaje de Marcado de HiperTexto. Permite crear la estructura de los elementos en una pagina web.
 
## DOM 
Significa 'Document Object Model' o Modelo de Objetos para la Representación de Documentos. Define la estructura logica del documento y la forma en que se accede a este y se lo manipula.

## 'scope' o Alcance/Ambito
Scope se define como el conjunto de varibles, objetos y funciones al cual uno puede acceder.

## 'console' o Consola
Es una forma de interactuar con el sistema. Para escribirle a la consola del navegador, puede usarse `console.log(‘Hello World’)`. Esto escribiria o mostraria 'Hello World' en la consola del navegador.
