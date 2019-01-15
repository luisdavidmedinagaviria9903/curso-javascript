/* ===========Definiendo variables con caracteres=============== */
var nombre = 'Luis', apellido='Medina'

//cambiando variables de minuculas a mayusculas y viceversa
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

//Esta funcion charAt(posicion de la letra), me trae la letra
//en especifica de una variable
var primerLetraDelNombre = nombre.charAt(0)

//variable.length, me trae la cantidad de letras que tiene una variable
var cantidadDeLetrasDelNombre = nombre.length

// Me trae toda el contenido de variables, ademas les puedo aplicar camelcase
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

//Me concatena el valor de una variable nombre en la posicion 1 + el valor de la misma
//variable en la posicion 2 | resulatado: ui
var str = nombre.charAt(1) + nombre.charAt(2)

//realiza el mismo procedimiento de charAt().
var str = nombre.substr(1,2)

/* ==================Definiendo variables con numeros =============*/
var edad = 27

//edad = edad + 1 | es lo mismo que | edad += 1
edad += 1;

var peso = 75

// peso = peso - 2 | es igual a | peso -= 2
peso -= 2

var sandwich = 1

peso = peso + sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

// este metodo math.round() me redondea todos los valores despues de la coma del decimal
var total = math.round(precioDeVino * 100 * 3) /100

//El metodo toFixed me trae todos los valores que yo quiera despues de la coma de un ecimal
var totalStr = total.toFixed(3)

//parsefloat() me redondea el valor de un decimal
var total2 = parseFloat(totalStr)

//Como dividir
var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
