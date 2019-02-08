class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura  = altura
  }

  saludar(){
      console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
  super(nombre,apellido,altura)
  }

  saludar(){
      console.log(`Hola, Me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
  }

}
/*
function Persona (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}


var Luis = new Persona('Luis', 'Medina')
var Nidia = new Persona('Nidia', 'Gaviria')
var None = new Persona('None', 'None')
*/
