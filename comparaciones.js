var x = 4, y = '4'

// x == y // esto me da resultado como true
// x === y // me da como resultado ocmo false
// es recomendado utilizar el triple igual === ya que me da la comparacion exacta

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}

// sacha == otraPersona | me da como resultado false
// sacha === otraPersona | me da como resultado false
// Ya que son diferentes lugares en memoria

var sacha = {
  nombre: 'Sacha'
}

var otraPersona = sacha

// otraPersona == sacha | me da como resultado true, ya que se sobrepone en el mismo lugar en memoria.
// si se cambian los valores de otra persona pro ejemplo
// sacha {nombre: "Sacha"}
// otraPersona {nombre: "Sacha"}

//ahora si le cambiamos los valores a otraPersona
//otraPersona.nombre = 'pepe'

//automaticamente se cambia el valor de el objeto sacha, ya que este esta ene l mismo lugar de memoria que otraPersona.
//sacha {nombre: "pepe"}

//Peros si se hace de esta manera
/* var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}
// aqui, si se cambia el valor de otraPersona.nombre por otro, el objeto de scha no cambian
// ya que son objetos en diferentes lugares de memorias
*/
/*=========================================================================== */

var sacha = {
  nombre: 'Sacha'
}


var otraPersona  {
  ...sacha
}

// otraPersona == sacha
// otraPersona === sacha
//Nos sigue dando false ya que esta nueva persona es un nuevo objeto,a unque estemos desglosando
//los atributos de sacha, es otro lugar en memoria

var sacha = {
  nombre: 'Sacha'
}

var otraPersona  {
  ...sacha
}
