/* const veracidad1 = true || false && true

console.log(veracidad1)

const veracidad2 = !true || false && true

console.log("22" > "3")
// es falso porque 2 sale antes que 3 en el utf-16
console.log(parseInt("22") > parseInt("3"))
// este si es verdadero al comparar número, no string

console.log(1=="1")
console.log(1==="1") */

// if(true){
//   console.log("es verdadero")
//   console.log("creanme")
// }


/* const saldoPrompt = prompt("Ingrese su saldo") // si apreta cancel es un null
const saldo = Number(saldoPrompt)
if(null === saldoPrompt || isNaN(saldo)){
  alert("Ese no es un valor válido de saldo")
} else if(saldo <0){ // null no es menor que cero
  alert("Tiene saldo negativo")
} else {
  alert("FELICITACIONES, TENES UN SALDO POSITIVO")
}
 */

// console.log(NaN === NaN)

// console.log(isNaN(NaN))
// console.log(isNaN("asd"))
// console.log(isNaN(""))


/* const numerito = 1

// condicionales encadenados
if(numerito < 2){
  console.log("es menor a 2")
}else if(numerito < 3){
  console.log("es menor a 3")
} else if(numerito < 4){
  console.log("es menor a 4")
}else if(numerito < 5){
  console.log("es menor a 5")
} else {
  console.log("ningun caso es verdadero")
}

// secuencia de if statement
if(numerito < 2){
  console.log("es menor a 2")
}
if(numerito < 3){
  console.log("es menor a 3")
} 
if(numerito < 4){
  console.log("es menor a 4")
}
if(numerito < 5){
  console.log("es menor a 5")
} */

// condicionales anidados
/* if(numerito > 0){
  console.log(`${numerito} es un número positivo`)
  if(numerito % 2 === 0){
    console.log("y par")
  } else {
    console.log("e impar")
  }
} else {
  console.log(`${numerito} es un número negativo`)
  if(numerito % 2 === 0){
    console.log("y par")
  } else {
    console.log("e impar")
  }
} */

/* let nombre = prompt("diga su nombre").toLowerCase()
// ANdreES => andres
switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
}  */

/* for(let i=0; i<5; i=i+1){
  console.log("Este es i:", i)
}

for(let i=0; i<5; i++){
  console.log("Este es i:", i)
}

for(let i=0; i<5; i+=1){
  console.log("Este es i:", i)
} */


/* let condicion = true

while(condicion){
  alert("hola")
  condicion = confirm( "¿Desa que le diga hola nuevamente?")
} */

/* while(true){
  alert("hola")
  let condicion = confirm("¿Desa que le diga hola nuevamente?")
  if(!condicion){
    break
  }
} */


/*   for(let i=0; i<5; i=i+1){
    console.log("Este es i:", i)
  } */

/* let numero = 10

console.log("inicio while")

while(numero<5){
  console.log(numero)
  numero = numero + 1
}

console.log("termino while")

console.log("inicio do while")

do{
  console.log(numero)
  numero = numero + 1
}while(numero<5)

console.log("termino do while") */

/* for(let i=0; i<5; i=i+1){
  if(i===3){
    console.log("Este número no me gusta")
    continue
  }
  console.log("Este es i:", i)
} */

let login = false
const usuario = "asd"
const contrasenia = "qwerty"
let contador = 0

alert(" Tiene 3 intentos para ingresar su usuario y cotnraseña correctamente")

do{
  alert(`Tenes todavía ${3-contador} intento/s`)
  let ingresoUsuario = prompt(" Usuario:")
  let ingresoContrasenia = prompt(" Contraseña:")
  if(ingresoUsuario === usuario && contrasenia === ingresoContrasenia){
    alert("Usted ha ingresado los datos correctamente")
    login = true
  } else {
    alert( 'Datos erróneos')
  }
  contador++
}while(!login && contador<3)

if(login){
  alert("cargo los datos")
} else {
  alert("chau")
}