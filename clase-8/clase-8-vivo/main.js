
/* const temporizador = setTimeout(()=>{
  console.log("Pasaron ya 3 segundos, te tardaste")
}, 3000)

const cronometro = setTimeout(()=>{
  console.log("Soy más rápido")
}, 1000)

console.log(temporizador)
console.log(cronometro) */


/* console.log(1)
setTimeout(()=>{console.log(2)}, 1000)
setTimeout(()=>{console.log(3)}, 3000)
setTimeout(()=>{console.log(4)}, 0)
console.log(5) */
/* 
let tiempo = 0

const reloj = setInterval(()=>{console.log(`pasaron ${++tiempo} segundos`)}, 1000)

const assesino = setTimeout(()=>{
  clearInterval(reloj)
  console.log(" el reloj ha muerto")
}, 10000) */

/* setTimeout(()=>{
  clearTimeout(assesino)
  console.log(" Reloj te salve")
}, 5000) */
/* 
console.log("Empiezo")

try {
  console.log(" Pedido a DB")
  const numerito = 45
  numerito = 4  
} catch (error) {
  console.warn("Error 404", error)
} finally {
  console.log("Aca esta")
}
console.log("termine")
 */

/* const promesa = new Promise((resolve, reject)=>{
  console.log("Me ejecute")

  const moneda = Math.floor(Math.random()*2) // 0 o 1

  if(moneda>0){
    resolve("Cara")
  } else {
    reject("Cruz")
  }
})

promesa.then(respuesta=>{
  console.log("Exito: ", respuesta)
}).catch(error=>{
  console.warn("Error: ",error)
}) */

/* const productos = []
const url = "lista.json"
const ul = document.getElementById("productos")

function mostrarProductos(){
  ul.innerHTML = ""
  productos.forEach(e=>{
    const li = document.createElement("li")
    li.innerText = e.nombre
    ul.appendChild(li)
  })
}

console.log("inicio")
fetch(url)
.then(function(respuesta){
  return respuesta.json()
})
.then(rta =>{
  // console.log(rta)
  rta.forEach(e=>productos.push(e))
  console.log(" productos fetcheados", productos)
  mostrarProductos()
}).catch(error=>{
  ul.innerText = "Error 404"
})

console.log("fin") 
 */

// mostrarProductos()
/* 
fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0").then(rta => rta.json()).then(respuesta=>{
  // console.log(respuesta)
  const listaPoke = document.getElementById("pokemon")
  listaPoke.innerHTML = ""
  respuesta.results.forEach(element => {
    const li = document.createElement("li")
    li.innerText = element.name
    listaPoke.appendChild(li)
  });
}) */

async function pedirPokemones(){
  // fetch
  try {
    const datosJSON = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0")
    const datos = await datosJSON.json()
    // datos que uso
    const pokemones = datos.results
    // uso los datos
    const listaPoke = document.getElementById("pokemon")
    listaPoke.innerHTML = ""
    pokemones.forEach(element => {
      const li = document.createElement("li")
      li.innerText = element.name
      listaPoke.appendChild(li)
    });
  } catch (error) {
    console.warn("fallo el fetch")
  }
}

pedirPokemones()