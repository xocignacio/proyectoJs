/* PRIMER DESAFIO */

let nombre = prompt ('cual es tu nombre?')

if (nombre) {
     alert('hola' + nombre + 'Bienvenido a mi pagina web')
}



/* SEGUNDO DESAFIO */

let nombre = prompt ('cual es tu nombre?')
let edad = +prompt('cuantos años tenes?')

console.log(nombre, typeof nombre)
console.log(edad, typeof edad)

if (edad <= 18) {
    alert('Perdon, pero para ingresar a mi web debes ser mayor')
} else {
    alert('Bienvenido a mi pagina web')
}

