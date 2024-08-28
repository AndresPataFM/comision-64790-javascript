/* 
La semana estudiaste la sintaxis para la creación de funciones, aplicando los conocimientos adquiridos completa la función.
Una vez completada tomala como base para crear una función flecha pero pasando los valores a sumar como parámetros en la función sumar. 
*/

/* 
________ sumar() {
  let numero1 = 5;
  let ________ = numero1 + 5;

  ________ resultado;
}

________ (sumar());
*/

/* function sumar() {
  let numero1 = 5;
  let resultado = numero1 + 5;

  return resultado;
} */

// console.log(sumar());


// flecha indica funcion
// que no halla llaves después de la flecha indica return implicito

/* const sumar = ()=>{
  let numero1 = 5;
  let resultado = numero1 + 5;
  return resultado;
} */

// const sumar = ()=> 5 + 5;
// const sumar = (numero1)=> numero1 + 5;

// const sumar = numero1 => numero1 + 5;
const sumar = (numero1, numero2) => numero1 + numero2;

console.log(sumar(2, 14))
console.log(sumar(7, 124))