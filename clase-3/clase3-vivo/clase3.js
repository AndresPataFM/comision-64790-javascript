// function contador(){
//   let numerito = 0
//   let loop = true
//   while(loop){
//     numerito++
//     loop = confirm("Bienvenido, usted ha escuchado este saludo "+ numerito+ " veces. Desea Escucharlo nuevamente?")
//   }
//   alert("Lo escucho "+numerito+" veces")
// }



// cocinar(){
//   juntarIngredientes()
//   prepararIngredientes()
//   cocinarSarten()
//   servirPlato()
// }

function d20(){
  let numerito = 1+Math.floor(Math.random()*20)
  return numerito
}
function d6(){
  let numerito = 1+Math.floor(Math.random()*6)
  return numerito
}

const tirada = d20()

function tiradaGenerala(){
  for(let i=0; i<5;i++){
    console.log(d6())
  }
}


function saludar(){
  console.log("Hola como estan")
  if(Math.random()>0.5){
    return
    // El return le dice a la funcion que pare de trabajar y muestre lo que esta en el return
  }
  console.log("Todo bien?")
}

// function dx(caras){
//   return 1+Math.floor(Math.random()*caras)
// }

// console.log(dx(20))

// console.log(dx(6))

function saludador3000(nombre){
  alert(`Hola ${nombre} comoe estas. Bienvenido a mi página.`)
}

// const usuario = prompt("Por favor ingrese su nomrbe")

// saludador3000(usuario)






// const suma = function (a, b){
//   return a+b
// }
console.log(calculos(1,2,3)) // Funciona gracias a hoisting

function calculos(a,b,c){
  let sumaTemporal = a+b
  return sumaTemporal*c
}

// console.log(suma(3,4))
// console.log(calculos(2,3,4))
// console.log(suma(3,4))

// despedir() // al no tener hoisting salta error
const despedir = ()=>{
  console.log("chau")
}

despedir()


const suma = (a,b)=> a+b
// return implicito

console.log(suma(7,3))

const saludador = nombre =>{
  console.log(`Hola ${nombre}`)
}

saludador("Juan")

const saludadorVago = nombre => `Hola ${nombre}`





/* 
Si tenemos un negocio y todos los meses compramos productos para vender pero por catálogo nos entregan el precio sin IVA, ¿Cómo podríamos agregar el iva a los productos?
Teniendo la constante IVA = 1.21, imagina una función flecha la cual reciba un valor numérico como parámetro, y que retorne dicho valor con IVA incluido. 
El IVA debe tomarse de una constante, para que la función sea dinámica. ¿Cómo te imaginas el resultado?


*/

/* const IVA = 1.21;

const calcularTotal = precio => precio*IVA

console.log(calcularTotal(10000)) */


function calcularTotal (precio, impuesto=1.21){
  console.log(precio)
  console.log(impuesto)
  return precio*impuesto
}


console.log(calcularTotal(10000, 1.11))
// console.log(calcularTotal(10000, 1.21))





























console.log(saludadorVago("David"))