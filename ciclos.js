var luis = {
    nombre: 'Luis',
    apellido: 'Medina',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año luis pesaba ${luis.nombre} pesa ${luis.peso} kg`)

const INCREMENTO_PESO = 0.2 // en gramos // en kilogrmaos200kg
const DIAS_DEL_AÑO = 365
const aumentarDePeso = persona => persona.peso  += INCREMENTO_PESO // += 200

const adelgazar = persona => persona.peso -= INCREMENTO_PESO //-=200


for(var i = 1; i <= DIAS_DEL_AÑO ; i++){
    var random = math.random()

    if (random < 0.25){
        aumentarDePeso(luis)

    } else if (random < 0.5){
        adelgazar(luis)
    }
}


console.log(`Al final del año luis pesaba ${luis.nombre} pesa ${luis.peso} kg`)


