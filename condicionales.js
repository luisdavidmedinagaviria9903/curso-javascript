var sacha = {
  nombre: 'Luis',
  apellido: 'Medina',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona){

  console.log(`${persona.nombre} es:`)

/* (persona.ingeniero=== true ), no se hace de esta manera ya que en el objeto ya esta inicializado en verdadero*/
  if (persona.ingeniero) {
    console.log('ingeniero')
  } else {
    console.log('No es ingeniero');

  }
  if (persona.cocinero) {
    console.log('cocinero');
  }

  if (persona.cantante) {
    console.log('cantante');
  }
  if (persona.dj) {
    console.log('DJ');
  }
  if (persona.guitarrista) {
    console.log('guitarrista');
  }
  if (persona.drone) {
    console.log('Piloto de drone');
  }


}
imprimirProfesiones(sacha)

//***********************************************************//
// se utiliza una variable constante ya que se va a remplazar con el pasar el tiempo
/// ya que la mayoria de edad en los paises es diferente ya ademas que una variable global nunca se cambia
const MAYORIA_DE_EDAD = 18;


// se crea esta funcion para guardar la condicion de que si tiene mas de 18, la persona es mayor de edad
function esMayorDeEdad(persona) {

  // se retorna o se devuelve la condicion para que sea capturada por la funcion imprimirSiEsMayorDeEdad y utilizarla alla
  // *** De esta manera es que se utiliza el return, recuerdalo siempre.
  return persona.edad >= MAYORIA_DE_EDAD
  
}

function imprimirSiEsMayorDeEdad(persona) {

  //se recibe la comparacion que se hizo en la funcion es Mayor de Edad
  if (esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }

}
