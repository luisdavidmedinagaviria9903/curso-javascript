function Persona (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
console.log(`Hola, Me llamo ${this.nombre} ${this.apellido}`)
}

var Luis = new Persona('Luis', 'Medina')
var Nidia = new Persona('Nidia', 'Gaviria')
var None = new Persona('None', 'None')
