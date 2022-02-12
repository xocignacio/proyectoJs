$('main').append(`                                    
  <h1 class="tituloProductos">Conoce nuestra amplia variedad de cafes</h1>
`)

const URL_JSON = '../db/data.json'

$('main').prepend(`<button id="botonCafeHot"> Cafes calientes </button>`)

$('#botonCafeHot').click( () => {

    $.get(URL_JSON, ( response, status ) => {

        if ( status !== 'success') {
            throw new Error('Error')
            
        }
        console.log(response)        
           for ( const cafe of response ) {

            $('#renderCafe').append(`
            <div>
                 <h3 id="titulo-show"> ${cafe.title} </h2>
                 <li> ${cafe.description}</li>
                 <hr> </hr>
            </div>
        `)
        } 

    })

}) 

$('#botonCafeHot').click( () => {
    $('#titulo-show').hide()
})


const URL_JSON2 = '../db/dataCold.json'

$('main').prepend(`<button id="botonCafeCold"> Cafes frios </button>`)

$('#botonCafeCold').click( () => {

    $.get(URL_JSON2, ( response, status ) => {

        if ( status !== 'success') {
            throw new Error('Error')
            
        }
        console.log(response)        
           for ( const cafe of response ) {

            $('#renderCafe2').append(`
            <div>
                 <h3> ${cafe.title} </h2>
                 <li> ${cafe.description}</li>
                 <hr> </hr>
            </div>
        `)
        } 

    })

}) 



/* const URLfree = 'https://jsonplaceholder.typicode.com/users'

$('main').prepend(`<button id="botonApi"> Usuarios por api</button>`)

$('#botonApi').click( () => {

    $.get(URLfree, ( response, status ) => {

    if ( status !== 'success') {
        throw new Error('Error')
        
    }
    
    for ( const user of response ) {

        $('#renderCafe').append(`
        <div>
            <li>${user.name}</li>
        </div>
    `)
    } 
})
}) */


