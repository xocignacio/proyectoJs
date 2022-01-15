const btn5 = document.getElementById('btn5')

btn5.onclick = () => {
    const divHistoria = document.getElementById('divHistoria')

    divHistoria.innerHTML = `<span>
                                 <p>
                                      ${ 'CoffeeCLUB es un concepto que surgio en una converzacion entre amigos en una cafeteria de prestigio, que para nuestra sorpresa carecia de propuestas a la hora de servir cafe. En el ano 2021 es cuando decidimos funda una pequena cafeteria en el centro de San isidro tratando de plasmar nuestro amor por el cafeteria en un servicio pensado para que nuestros clientes disfruten de una experiencia unica con cada sorbo de cafe.' } 
                                 </p>
                        </span>`

  btn5.appendChild( divHistoria )
}

const btn6 = document.getElementById('btn6')

btn6.onclick = () => {
    const divHistory = document.getElementById('divHistory')

    divHistory.innerHTML = `<span>
                                 <p>
                                      ${ 'CoffeeCLUB is a concept that emerged in a conversation between friends in a prestigious coffee shop, which to our surprise lacked proposals when it came to serving coffee. In the year 2021 is when we decided to found a small cafeteria in the center of San Isidro trying to capture our love for the cafeteria in a service designed so that our customers enjoy a unique experience with each sip of coffee.' } 
                                 </p>
                        </span>`

  btn6.appendChild( divHistory )
}

