/* ====================== FUNCIONES ================= */
// de esta manera la funcion no es reutilizable ya que no se pude,
//escribir el nombre de otra persona con otra edad, siempre va a tomar
// el mismo valor que tienen las variables ya  definidas
var nombre = 'Luis', edad = 19;

function imprimeEdad(n, e){
  console.log(`${nombre} tiene ${edad} años` )
}
imprimeEdad ()


//de esta manera, se le pueden agregar parametros diferentes
//a los originaes que estaban primero en las variables.
function imprimeEdad(n, e){
  console.log(`${n} tiene ${e} años`)
}

imprimeEdad (nombre, edad)
imprimeEdad ('Vicky', 28)
imprimeEdad ('Eric', 24)
imprimeEdad ('Dario', 27)

//De esta manera, javascript lo entiende y no me exije que ponga primero el
//nombre y despues la edad
imprimeEdad (25, 'Carlos')

//De esta manera, me indica que la edad esta undefined
imprimeEdad ('juan')

/* Variable global [que puede ser accedida por todas las funcione]
  Variable local [que es accedidad solo por las funciones]
*/

var nombreGlobal ='Luis'

/*De esta manera no se cambia el valor de la variable global cuando
  se imprima window.nombre, aunque si se imprime el metodo dentro de la funcione
  solamente cambiara el estado de nombreFuncion mas no el de nombreGlobal*/

function imprimirNombreEnMayusculas(nombreFuncion){
  nombreFuncion = nombreFuncion.toUpperCase()
  console.log(nombre);

}
imprimirNombreEnMayusculas(nombre)
