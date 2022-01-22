$('main').prepend(`
                   
                  <form id="form">
                    <h2 id="textoContacto"> Para contactarnos comple los siguientes datos </h2>
                    <p>nombre</p><input id="input-name" type="text"> 
                    <p>apellido</p><input id="input-name" type="text"> 
                    <p>email</P><input id="input-email" type="email">
                    <p>Mensaje</p><textarea id="msg" type="text"></textarea>
                    <br></br>
                    <input id="input-submit" type="submit">
                    <input id="input-submit" type="reset" value="Borrar">
                  </form>
                `)


$('#form').submit( function (event) {
                        event.preventDefault()
                    
                        let children = $(event.target).children();
                    
                        const name = $('#input-name')[0].value
                        const email = $('#input-email')[0].value
                        console.log(name, email);
                    
                        alert('Muchas gracias, nos comunicaremos en breve')
                    })
  
               
               
$("body").append('<body></body>');
      //Modificamos las reglas CSS desde jQuery
                    $("body").css(
                     "   background-color: black"
                    
                    );
                   
                    






                              

