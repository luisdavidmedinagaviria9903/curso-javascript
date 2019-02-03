/*var luis = {
    nombre: 'Luis',
    apellido: 'Medina',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año luis pesaba ${luis.nombre} pesa ${luis.peso} kg`)

const INCREMENTO_PESO = 0.3 // en gramos // en kilogrmaos200kg
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso  += INCREMENTO_PESO // += 200

const adelgazar = persona => persona.peso -= INCREMENTO_PESO //-=200
const meta = luis.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0*/




/* ********************************EJEMPLO CON WHILE*********************************************
while (luis.peso > meta) {
  //debugger
  //el debugger va a detener la ejecucion del programa en cualquier parte del codigo donde se ponga.
  if (comeMucho()) {
    //aumentarDePeso
    aumentarDePeso()

  }

  if (realizaDeporte()) {
    //adelgazar
    adelgazar()
  }

  dias += 1
}

console.log(`Pasaron ${dias} Hasta que ${luis.nombre} adelgazo 3kg`)
*/

/* EJEMPLO CON DO WHILE */

var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while (!llueve());


// El signo de interrogación es conocido como operador ternario y es una forma abreviada de un if, por así decirlo.
console.log(`fui a ver si llovia ${contador}${contador > 1 ? ' veces' : ' vez'} `);

/*
if (contador > 1) {
console.log(` Fui a ver si llovia ${contador} veces`)
}else {
  console.log(` Fui a ver si llovia ${contador} vez`)
}

//*******EJEMPLO CON FOR************
/*for(var i = 1; i <= DIAS_DEL_AÑO ; i++){
    var random = math.random()

    if (random < 0.25){
        aumentarDePeso(luis)

    } else if (random < 0.5){
        adelgazar(luis)
    }
}*/

//console.log(`Al final del año luis pesaba ${luis.nombre} pesa ${luis.peso} kg`)
