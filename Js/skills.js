alert("Bienvenido al spot donde practico diferentes habilidades de js")

function Usuario(nombre, edad, cafe,) {
    this.name = nombre;
    this.age = edad;
    this.coffee = cafe;
    
      
    this.getNameAge = function () {
      return `Hola, me llamo ${this.name} y tengo ${this.age} años`;
    };

    this.geTipoCafe = function () {
        return `Mi cafe favorito es el ${this.coffee} `;
      };    
    
    this.getFull = function() {
        return `Hola, mi nombre es ${this.name}, tengo ${this.age} años y el cafe que mas me gusta es el ${this.coffee} `;
    }
    
    
    this.getCafe = function () {
      let cafeList = "Lista de cafes";
  
      this.coffee.map((item) => {
           
        cafeList += `* ${item.cafe} `;
      });
      console.log(typeof cafeList);
      return cafeList;
    };
  }
  
  let cafeList = [
    {
      cafe: "cafe espresso",      
    },
    {
      cafe: "cafe americano",      
    },
    {
      cafe: "cafe cappuccino",      
    },
    {
      cafe: "cafe latte",      
    },
    {
      cafe: "cafe moka",      
    },
    {
     cafe: "cafe caramel macchiato",     
    },    
  ];
  
  let newUser = new Usuario("Nacho", 30 , "cafe latte");
    
  console.log(newUser.getNameAge());
  console.log(newUser.geTipoCafe());
  console.log(newUser.getFull());
 
  let newUser2 = new Usuario ("Fermin", 18, "cafe americano");
  
  console.log(newUser2.getNameAge());
  console.log(newUser2.geTipoCafe());
  console.log(newUser2.getFull());
  
  console.log(newUser.getCafe());




  