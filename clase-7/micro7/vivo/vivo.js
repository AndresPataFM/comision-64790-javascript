const frutas = ["Ananá", "Banana", "Durazno", "Kiwi", "Manzana", "Papaya", "Pera"]
/*
const textoTitulo = "www.mandafruta.com"

const titulo = document.getElementById("titulo")
const listaFrutas = document.getElementById("listado")

titulo.innerText = textoTitulo

listaFrutas.innerHTML = ""

frutas.forEach(fruta=>{
  listaFrutas.innerHTML += `<li>${fruta}</li>`
}) */

function cargarDOM() {
  const titulo = document.querySelector("#titulo")
  const listado = document.querySelector("#listado")
  titulo.innerText = "www.mandafruta.com"
  frutas.forEach(fruta => {
    listado.innerHTML += `<li>${fruta}</li>`
  })
}

cargarDOM()