// Desafíos complementarios
// Actividad 01:
/* 
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar. 
*/

/* let numeroIngresado = prompt("Ingrese un número entero")
let numeroProcesado = parseInt(numeroIngresado)

while(isNaN(numeroProcesado)){
  numeroIngresado = prompt("Ingrese un número entero correctamente")
  numeroProcesado = parseInt(numeroIngresado)
}

if(numeroProcesado % 2 === 0){
  alert(`El número ${numeroProcesado} es par`)
} else {
  alert(`El número ${numeroProcesado} es impar`)
} */

// 5 % 2
// 5-4 = 1
// 5 % 2 = 1


// Actividad 02:
/* 
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir". 
*/

let loop = true

while(loop){
  let numeroIngresado = prompt("Ingrese un número entero")
  let numeroProcesado = parseInt(numeroIngresado)

  while(isNaN(numeroProcesado)){
    numeroIngresado = prompt("Ingrese un número entero correctamente")
    numeroProcesado = parseInt(numeroIngresado)
  }

  if(numeroProcesado % 2 === 0){
    alert(`El número ${numeroProcesado} es par`)
  } else {
    alert(`El número ${numeroProcesado} es impar`)
  }
  loop = confirm("¿Desea evaluar otro número?")
}