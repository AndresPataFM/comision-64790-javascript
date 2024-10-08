const botonSWAL = document.getElementById("boton")
const botonToast = document.getElementById("botonToastify")

// Seet Alert
// https://sweetalert2.github.io/

botonSWAL.addEventListener("click",()=>{
  // Swal.fire({
  //   title: "Me tocaste",
  //   text: "No te atrevas a hacerlo denuevo! Estoy de vacaciones.",
  //   icon: "warning"
  // });
  Swal.fire({
    title: "Me tocaste",
    text: "No te atrevas a hacerlo denuevo! Estoy de vacaciones.",
    showDenyButton: true,
    confirmButtonText: "Entendí",
    denyButtonText: `No entendí`,
    icon: "warning"
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Muy buen, ahora dejame en paz.", "", "success");
    } else if (result.isDenied) {
      Swal.fire("pero que sos denso", "", "error");
    }
  });
})



// toastify
// https://apvarun.github.io/toastify-js/

botonToast.addEventListener("click", ()=>{
  Toastify({
    text: "This is a toast",
    className: "paraToast",
    duration: 5000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
  }).showToast();
})


// Luxon
// https://moment.github.io/luxon/#/?id=luxon

let DateTime = luxon.DateTime;
console.dir(DateTime)
console.log(DateTime.now())
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_SHORT))
console.log(DateTime.now().toLocaleString(DateTime.DATETIME_LONG))
