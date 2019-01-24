//***********************************************************//
// se utiliza una variable constante ya que se va a remplazar con el pasar el tiempo
/// ya que la mayoria de edad en los paises es diferente ya ademas que una variable global nunca se cambia
const MAYORIA_DE_EDAD = 18;


// se crea esta funcion para guardar la condicion de que si tiene mas de 18, la persona es mayor de edad
// Manera de hacer una funcion sin ser agregada a variable
function esMayorDeEdad(persona) {

    // se retorna o se devuelve la condicion para que sea capturada por la funcion imprimirSiEsMayorDeEdad y utilizarla alla
    // *** De esta manera es que se utiliza el return, recuerdalo siempre.
    return persona.edad >= MAYORIA_DE_EDAD

}

// es totalmente permitido agragarle una funcion a una variable

 var esMayorDeEdad = function (persona) {

    // se retorna o se devuelve la condicion para que sea capturada por la funcion imprimirSiEsMayorDeEdad y utilizarla alla
    // *** De esta manera es que se utiliza el return, recuerdalo siempre.
    return persona.edad >= MAYORIA_DE_EDAD

}
 // *********************Otra forma de escribir funciones es Arrow function ***************

// de esta manera se elimina la palabra reservada function, y se agrega una arrow => , Ademas,
// En vez de poner var, se pone const para diferenciar una variable de un arrow function

 const esMayorDeEdad = persona => {

    // se retorna o se devuelve la condicion para que sea capturada por la funcion imprimirSiEsMayorDeEdad y utilizarla alla
    // *** De esta manera es que se utiliza el return, recuerdalo siempre.
    return persona.edad >= MAYORIA_DE_EDAD

}


// Si una funcion lo unico que hace es retornar algo, se hace de esa la siguiente manera.
// De esta manera se retorna sin necesidad de poner la palabra reservada return
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD


// Para desestructurar el parametro es decir acceder a la edad del objeto se hace de esta manera

/*De esta manera no hay necesidad de poner persona.edad
  es un poco complejo entender esta nomenclatura, pero esta muy de moda hoy en dia*/
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD



// Esta function me imprime la comparacion.
function imprimirSiEsMayorDeEdad(persona) {

    //se recibe la comparacion que se hizo en la funcion es Mayor de Edad
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }

}


// De esta manera se niega en JS, con el  signo de admiracion !
function  permitirAcceso() {
    if (!esMayorDeEdad(persona)){
        console.log('Acceso denegado');
    }

}