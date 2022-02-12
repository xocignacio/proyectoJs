$('main').prepend(`                                     
<form id="form">
  <h1 class="suscribite"> Suscribite </h1>
  <h2 id="textoContacto"> Siendo parte de coffeeCLUB obtenes un cafe gratis </h2>
  <input id="input-name" type="text" placeholder="Nombre"> 
  <input id="input-name" type="text" placeholder="Apellido">                   
  <input id="input-email" type="email" placeholder="Email">
  <input id="password" type="password" placeholder="contraseña">                    
  <input id="input-submit" type="submit" value="Suscribite">
  <input id="input-submit" type="reset" value="Borrar">
  <p class="warnings" id="warnings"></p>
 </form>
`)

const nombre = document.getElementById ("input-name")
const email = document.getElementById ("input-email")
const password = document.getElementById ("password")
const form = document.getElementById ("form")
const parrafo = document.getElementById ("warnings")

form.addEventListener("submit", e=> {
  e.preventDefault()
  let warnings = ""
  let entrarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let entrar = false
  parrafo.innerHTML = ""
  if(nombre.value.length <2) {
   warnings += `  el nombre no es valido <div></div>`
   entrar = true
  }
  
  if(!entrarEmail.test(email.value)){
    warnings += `el email no es valido <div></div>`
    entrar = true
  }
  if(password.value.length <4) {
    warnings += `la contraseña no es valida<div></div>`
    entrar = true
   }

  if(entrar) {
    parrafo.innerHTML = warnings
  }
  else {
    alert('Muchas gracias, ya sos parte de coffeeCLUB') 
     
    }
})

/* function captura () {
  var nombre= document.getElementById("input-name").value
  alert(nombre)
 if (nombre =="") {
   alert('tiene que escribir algo')
  
 }
}

$('#form').submit( function (event) {
  event.preventDefault()
    
   let children = $(event.target).children();
              
   const name = $('#input-name')[0].value
   const email = $('#input-email')[0].value
   console.log(name, email);
            
  alert('Muchas gracias, nos comunicaremos en breve')
})
 */
               






              