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
