/* ================ Objetos en JS =====================*/

var luis ={
  nombre: 'Luis',
  apellido: 'Medina',
  edad: 27
}

function imprimirNombreEnMayusculas({ nombre }){
  console.log(nombre.toUpperCase());

}

/*Recuerda, de esta manera se sobrepone el valor de una variable, aunque
  en este modo la avariable se encuentra en el objeto*/
imprimirNombreEnMayusculas(luis)
imprimirNombreEnMayusculas(luis)

/* de esta manera se imprime el nombre que esta dentro del objeto que fue
  alterado por la funcion para que s epusiera en mayuscula*/
imprimirNombreEnMayusculas({ nombre })
imprimirNombreEnMayusculas({ nombre: 'pepito'})

/*De esta manera nos saldra un error, ya que esta esperando a que
  Le pasen un parametro*/
imprimirNombreEnMayusculas()


/*De esta manera nos saldra un error, ya que esta apellido no lo va
  a encontrar definido en el parametro que se le paso a la funcione
  donde oslamente se paso nombre */
imprimirNombreEnMayusculas({ apellido: 'Gomez'})

/* Este es otra forma de accede al atributo nombre del objeto*/

function imprimirNombreEnMayusculas(persona){

  // var nombre = persona.nombre | de esta manera tambien es valido acceder a lso atributos del objeto
  var{ nombre } = persona // de esta tambien
  console.log(nombre.toUpperCase())
}


/* parametros como referencia o como valor */

function cumpleaños(persona){
  return{
    ...persona,
    edad: persona.edad +1
  }
}
