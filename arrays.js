var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

var personas = [sacha, alan, martin, dario, vicky, paula]

/*for (var i = 0; i < personas.length; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura} mts`)
}*/

//************* Filtrar elementos en arrays ***************************************

const esAlta = ({altura})=> altura > 1.8

var personasAltas = personas.filter(esAlta)
console.log(personasAltas)
//EJERCICIO

const esBaja = ({altura}) => !esAlta({altura})
var personasBajas = personas.filter(esBaja)

console.log(personasBajas)


// ********** Transformar un array cambiando sus datos ***************************************

//De esta manera se returna una funcion igual como la que esta abajo
const pasarAlturaAcms = persona => ({
    ...persona,
    //persona.altura = persona.altura * 100 | es lo mismo como esta declarado debajo
    altura: persona.altura * 100
})

/*
const pasarAlturaAcms = persona => {
  return{
    ...persona,
    altura: persona.altura * 100
  }
}*/

var personasCms = personas.map(pasarAlturaAcms)

// ****************** Reducir un array a un valor, es decir contar un campo que esta en los objetos que se guardan en un arrays
 // Utilizando for para reducir la cantidad de libros de las personas esta bien pero para eso esta reduce

/* var acumulador = 0
for (var i = 0; i < personas.length; i++) {
  acumulador = acumulador[i].cantidadDeLibros // de esta manera me traera la cantidad de libros de todos los objetos
}

*/

// Esta es la forma recomendada, Utilizando reduce
/* const reducer = (acumulador, persona) => {
  return acumulador + persona.cantidadDeLibros
}  */

//Si solo se returna algo, se puede hacer de la forma aca abajo
/* const reducer = (acumulador, persona) => acumulador + persona.cantidadDeLibros */

// e incluso se puede hacer de esta forma,obmitiendo el nombre de la funcion persona
const reducer = (acumulador, { cantidadDeLibros }) => acumulador + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer, 0) //(nombre de la function, desde dondedebe empezar a contar el array)

console.log(` En total todos tienen ${totalDeLibros} libros`)
