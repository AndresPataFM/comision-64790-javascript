// const nombres = ["Andrés", "David", "Juan", "Micaela", "Santiago"];

// console.log(nombres)
// console.table(nombres)

// console.log(nombres[3])

// nombres[3] = "Marina"

// console.log(nombres)
// // nombres = ["Andrés", "David", "Juan", "Ezequiel", "Santiago"]

// nombres[5]="Juliana"
// console.log(nombres)
// console.log(nombres[5])

// console.log(nombres.length)

// // nombres[10] = "Pedro"

// // console.log(nombres)
// // console.log(nombres.length)
// let miembros = "Los miembros del comité son: \n * "
// // for(let i=0; i<nombres.length; i++){
// //   miembros += `\n * ${nombres[i]}` 
// // }
// miembros += nombres.join("\n * ")
// // Quedaría as: "Los miembros del comité son: \n * Andrés\n * David\n * Juan\n * Marina\n * Santiago\n * Juliana"
// // alert(miembros)
// console.log(miembros)

// // console.log(nombres.indexOf("Juliana"))


// // Asi se borra pero NUNCA lo hagan
// // delete nombres[0]
// // delete nombres[4]
// // console.table(nombres)

// const buscadorNombres = function(nombre){
//   const indice = nombres.indexOf(nombre)
//   if(indice===-1){
//     console.warn("No existe ese nombre en nuestra base de datos")
//   } else {
//     console.log(`El nombre ${nombre} es el miembro número ${indice}`)
//   }
// }

// buscadorNombres("Tatiana")
// /* 
// const numeritos = [1,2,3,4,5,5,5,6]

// console.log(numeritos.indexOf(5))
// console.log(numeritos.lastIndexOf(5)) */

// const palabras =  ["Pepe", "Juan", "Andres", "David" ]
// palabras.sort()
// console.log(palabras)
// palabras.reverse()
// console.log(palabras)
// const numeritos = [11, 2, 37, 4, 123, 7, 98]
// const numeritos2 = ["11", "2", "37", "4", "123", "7", "98"]

// //  [2,4,7,11,37,98,123]

// // numeritos.sort()
// numeritos2.sort()

// numeritos.sort().reverse()

// console.log(numeritos)
// console.log(numeritos2)

// // saludar()
// // function saludar(){
// //   console.log("hola")
// // }

// const a = 8
// a = 7


const productos = [
  {nombre: "pera", precio: 10},
  {nombre: "manzana", precio: 8},
  {nombre: "apio", precio: 1},
]

const carrito = []

const agregarCarrito = (producto, cantidad)=>{
  const elementoCarrito = {
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: cantidad
  }
  carrito.push(elementoCarrito)
}

const totalCarrito = ()=>{
  let total = 0
  console.log(carrito)
  for(let i=0; i<carrito.length; i++){
    total += carrito[i].precio * carrito[i].cantidad
  }
  return total
}

const app = ()=>{
  alert(" Bienvenido a nuestra tienda")
  let loop = true
  while(loop){
    let producto = prompt("Agregue el producto que desee según su codigo: \n 0- Pera $10 \n 1-Manzana $8 \n 2-Apio $1")
    let cantidad = parseInt(prompt(`¿Cuantos ${producto} desea comprar?`))
    agregarCarrito(productos[producto], cantidad)
    loop = confirm("Desea comprar más productos")
  }
  alert("Su total es $" + totalCarrito() + " se le cobrara en la brevedad")
}

app()