function dx(lados){
  return ()=>{
    return 1+Math.floor(Math.random()*lados)
  }
}

const d6 = dx(6)
const d20 = dx(20)

class Dado{
  constructor(lados){
    this.lados = lados
  }
  roll(){
    return 1+Math.floor(Math.random()*this.lados)
  }
}
/* console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())
console.log(d6())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
console.log(d20())
 */

// !6 = 6*5*4*3*2*1

const factorial = (nro) =>{
  console.log(nro)
  if(nro <= 1){
    return 1;
  }
  return nro * factorial(nro-1);
}

// console.log(factorial(6))

const numeritos = [12,34,553,123,5,7.22]

function iterarNumeritos(funcionParametro){
  for(let i=0; i<numeritos.length; i++){
    funcionParametro(numeritos[i])
  }
}

function mostrarNumero(nro){
  console.log(`El número encontrado es ${nro}`)
  if(nro%2===0){
    console.log("Es par")
  } else if(nro%2===1) {
    console.log("Es impar")
  } else {
    console.log("Es un flotante")
  }
}

iterarNumeritos(mostrarNumero)

const prodList = [
  {name:"Antipulgas Gato", id:"001", type:"Medicinal", price:450, stock:"32", description:"Antipulgas felino Frontline Plus",},
  {name:"Antipulgas Perro", id:"002", type:"Medicinal", price:450, stock:"28", description:"Antipulgas Canino Frontline Plus",},
  {name:"Antiparasitario", id:"003", type:"Medicinal", price:370, stock:"15", description:"Antiparasitario interno Oral Paraqueños",},
  {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:4530, stock:"18", description:"Alimento para gatos Kitten de Royal Canin",},
  {name:"Alimento Gato Adulto", id:"005", type:"Alimento", price:3900, stock:"27", description:"Alimento para gatos adultos Royal Canin Active Life",},
  {name:"Alimento Gato Edad Avanzada", id:"006", type:"Alimento", price:4620, stock:"15", description:"Alimento para gatos de edad avanzada Royal Canin Mature Consult Stage 1",},
  {name:"Alimento Perro Joven", id:"007", type:"Alimento", price:4450, stock:"22", description:"Alimento para perros jóvenes de tamaño mediano Royal Canin Puppy Medium.",},
  {name:"Alimento Perro Adulto", id:"008", type:"Alimento", price:3780, stock:"24", description:"Alimento para perros adultos de tamaño mediano Royal Canin Adult Medium.",},
  {name:"Alimento Perro Edad Avanzada", id:"009", type:"Alimento", price:4370, stock:"11", description:"Alimento para perros de edad avanzada de tamaño mediano Royal Canin Adgeing",},
  {name:"Juguete de Ratón", id:"010", type:"Juguete", price:170, stock:"10", description:"Un juguete de ratón de plastico y tela hipoalergénicos",},
  {name:"Hueso Comestible", id:"011", type:"Alimento", price:450, stock:"0", description:"12(Doce) unidades de huesos comestibles de cuero para perros",},
  {name:"Pelota", id:"012", type:"Juguete", price:210, stock:"9", description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)",},
]

const encontrar = prodList.find(function(elemento){
  const verificar = elemento.id === "007"
  return verificar
})

const verificarStock = prodList.filter((e,i)=>{
  console.log(i)
  return Number(e.price) <= 450
})

console.log(encontrar)

console.table(verificarStock)

console.log(numeritos.some((ele)=>{
  return ele === 12
}))

console.log(prodList.some((ele)=>{
  return ele.stock === "0"
}))


const numeritosLaVenganza = numeritos.map(e=>e*2)

console.log(numeritos)
console.log(numeritosLaVenganza)

const prodinflacion = prodList.map(producto=>{
  const prodTemp = JSON.parse(JSON.stringify(producto))
  prodTemp.price *= 1.1
  prodTemp.price = prodTemp.price.toFixed(2)
  return prodTemp
})

console.table(prodinflacion)
console.table(prodList)

const canasta = [{...prodList[1], quantity: 7},{...prodList[3], quantity: 3},{...prodList[5], quantity: 27},{...prodList[11], quantity: 2}]


const descuentos = 1000;

const total = canasta.reduce((acumulador, elemento)=>{
  return acumulador += (elemento.price * elemento.quantity)
}, -descuentos)

console.table(canasta)
console.log(total)

prodList.sort(function(prod1,prod2){
  if(prod1.price<prod2.price){
    return -1
  } else if(prod1.price>prod2.price){
    return 1
  } else {
    return 0
  }
})

console.table(prodList)

prodList.forEach((prod, index)=>{
  console.log(index)
  console.log(prod.name)
})