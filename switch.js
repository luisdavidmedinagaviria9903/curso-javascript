// Funcion para preguntarle algo al usuario en alert en el navegado
var signo = prompt('¿ Cual es tu signo ?')

switch (signo) {
  case 'acuario':
      console.log(`Un Acuario es simpático y humanitario. Es honesto y totalmente leal, original y brillante. Una persona de este signo es independiente e intelectual. Les gusta luchar por causas buenas, soñar y planificar para un futuro feliz, aprender del pasado, los buenos amigos y divertirse. `)
      break;
  case 'piscis':
      console.log(`Un piscis es imaginativo y sensible. Es amable y tiene compasión hacia los demás. Es intuitivo y piensa en los demás. A piscis le gusta estar solo para soñar. Le gusta el misterio y el ridículo. Le gusta perderse.`)
      break;
  case 'geminis':
           'géminis':
        console.log(`Los géminis tienes una gran adaptabilidad y versatilidad. Las personas que nacieron bajo este signo son intelectuales, elocuentes, cariñosos, comunicativos e inteligentes. Tienen mucha energía y vitalidad. Les gusta hablar, leer, hacer varias cosas a la vez. Además, disfrutan con lo inusual y la novedad. Cuánto más variedad en su vida, mejor.`)
      break;
  default:
      console.log(`Ese signo no existe`)
      break

}
