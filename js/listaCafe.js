const URL_JSON = 'db/data.json'

$('main').append(`<button id="botonLista"> IR a la API </button>`)


$('#botonLista').click( () => {

    $.get( URL_JSON, ( response, status ) => {

        if ( status !== 'success') {
            throw new Error('Error')
        }
        
      
          for ( const cafe of response ) {

            $('#renderCafe').append(`
            <div>
                <h3> ${user.title} </h3>
            </div>
        `)
        }

    })

})
