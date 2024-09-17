// const userName = "Andrés"
// const userPassword = "PassWord"
// const usermail = "mail@coder"

// const userName2 = "David"
// const userPassword2 = "contraseña"
// const usermail2 = "mai2@coder"

const user = {
  nombre:"Andrés",
  contrasenia:"PassWord",
  mail: "mail@coder",
  saludar: function(){
    console.log(`Hola soy ${this.nombre}`)
  }
};

user.saludar()

const user2 = {
  nobmre:"David",
  contrasenia:"contraseña",
  mail: "mai2@coder",
  saludar: function(){
    console.log(`Hola soy ${this.nombre}`)
  }
};
user2.saludar()

const usuarios = [user, user2]
/* 

const database = {
  usuarios: usuarios,
  algo: {asd:7}
}

console.log(database.algo.asd)
console.log(database.usuarios[0])

for(let usuario of usuarios){
  console.log(usuario.nombre)
} */










console.log(user.nombre)
console.log(user.contrasenia)
console.log(user.mail)

console.log(user["mail"])

user.edad = 30

console.log(user.edad)
console.log(user["edad"])


// NO LO HAGAN
user["malas practicas"] = "NO"

console.log(user["malas practicas"])


function Usuario(nombre, contrasenia, mail){
  this.nombre = nombre;
  this.contrasenia = contrasenia;
  this.mail =  mail;
  this.saludar =  function(){
    console.log(`Hola soy ${this.nombre}`);
  };
};


const agregarUsuario = (nombre, contrasenia, mail)=>{
  usuarios.push(new Usuario(nombre, contrasenia, mail))
}

agregarUsuario( "Äriel", 123, "asd")
agregarUsuario( "Äriel2", 123, "asd")
agregarUsuario( "Äriel3", 123, "asd")
agregarUsuario( "Äriel4", 123, "asd")
agregarUsuario( "Äriel5", 123, "asd")
console.log(user2)
// console.log(user3)

console.log(usuarios)

/* for(const usuario of usuarios){
  console.log(usuario.nombre)
} */

class Gato {
  constructor(nombre, genero, edad){
    this.nombre = nombre
    this.genero = genero
    this.edad = edad
  }
  maullar(){
    console.log("miau")
  }
  // funciona la función flecha pero no es recomendado
  /* mostrarDatos = ()=>{
    console.log(this.nombre)
  } */
  // haganlo así
  mostrarDatos(){
    console.log(this.nombre, this.edad, this.genero)
  }
  cumpleanios(){
    console.log("🎉")
    this.edad++
  }
}

const michifus = new Gato("Michifus", "masculino", 7)

michifus.mostrarDatos()
michifus.cumpleanios()
michifus.mostrarDatos()