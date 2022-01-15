$('main').prepend(`
                    <h2 id="textoContacto"> Para contactarnos comple los siguientes datos </h2>
                    <form id="form">
                    nombre <input id="input-name" type="text"> 
                    email <input id="input-email" type="email">
                          <textarea id="msg" type="text"></textarea>
                          <input id="input-submit" type="submit">
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

                    






                              

