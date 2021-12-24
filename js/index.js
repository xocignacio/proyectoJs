import { Producto } from "./constructores.js";  
import { cafe } from "./array.js";

for (const Producto of cafe) {
  console.log (cafe)
}

localStorage.setItem('carrito' , JSON.stringify(cafe))
const localCafe = localStorage.getItem ('carrito')
console.log(localCafe)

/* const parseCafe = JSON.parse(localStorage.getItem ('carrito'))
console.log(typeof carrito) */



let entrada = prompt ('Select language > español o english ')
switch (entrada) {
  case "español":
    var name = prompt("Como te llamas?")
    document.getElementById("bienvenida").innerHTML = 'Bienvenido a mi pagina web ' + name;
    break;
  case "english":
    var name = prompt("What's your name?")
    document.getElementById("bienvenida").innerHTML = 'Welcome to my Web site ' + name;
    break;
  case "ENGLISH":
    var name = prompt("What's your name?")
    document.getElementById("bienvenida").innerHTML = 'Welcome to my Web site ' + name;
    break;
  case 'spanish':
    var name = prompt("Como te llamas?")
    document.getElementById("bienvenida").innerHTML = 'Bienvenido a mi pagina web ' + name;
    break;
  case "ingles":
    var name = prompt("What's your name?")
    document.getElementById("bienvenida").innerHTML = 'Welcome to my Web site ' + name;
    break;
  case "ESPAÑOL":
    var name = prompt("Como te llamas?")
    document.getElementById("bienvenida").innerHTML = 'Bienvenido a mi pagina web ' + name;
    break;
  
  default:
    alert('Idioma seleccionado incorrecto')
    alert('Igualmente, bienvenido...')
}


const btn1 = document.getElementById('btn1')

btn1.onclick = () => {
    const divEsp = document.getElementById('divEsp')

    divEsp.innerHTML = `<span>
                                 <p>
                                      ${ 'Hola somos coffeeCLUB, un grupo de amantes del cafe que tomaron la decicion de fundar una pequeña cafeteria en el centro de san isidro BSAS, tomando como fundamento principal podes transmitirle a la gente nuestro amor por el cafe' } 
                                 </p>
                        </span>`

  btn1.appendChild( divEsp )
}



const btn2 = document.getElementById('btn2')

btn2.onclick = () => {
    const divING = document.getElementById('divING')   

    divING.innerHTML = `<span>
                                  <p>
                                      ${ 'Hello, we are coffeeCLUB, a group of coffee lovers who made the decision to found a small coffee shop in the center of San Isidro BSAS, taking as a main foundation you can transmit to people our love for coffee' } 
                                  </p>
                        </span>`

    btn2.appendChild( divING )
}


const btn3 = document.getElementById('btn3')

btn3.onclick = () => {
    const divEsp2 = document.getElementById('divEsp2')

    divEsp2.innerHTML = `<span>
                                  <p>
                                      ${ 'Para conocernos podes visitar nuestra cafeteria en jacinto diaz 63, en el pleno centro de san isidro, a una cuadra de centenario y cinco de la estacion de tren' } 
                                  </p>
                         </span>`

   btn3.appendChild( divEsp2 )
}


const btn4 = document.getElementById('btn4')

btn4.onclick = () => {
    const divEsp2 = document.getElementById('divING2')

    divING2.innerHTML = `<span>
                                  <p>
                                      ${ 'To get to know us you can visit our cafeteria in jacinto diaz 63, in the heart of San Isidro, one block from centennial and five from the train station.' } 
                                  </p>
                         </span>`

  btn4.appendChild( divING2)
}






